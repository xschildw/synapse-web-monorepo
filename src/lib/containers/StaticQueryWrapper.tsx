import * as React from "react"
import { SynapseClient } from ".."
import { SynapseConstants } from ".."
import { QueryBundleRequest } from "../utils/jsonResponses/Table/QueryBundleRequest"
import { QueryResultBundle } from "../utils/jsonResponses/Table/QueryResultBundle"

type StaticQueryWrapperState = {
    data: any
}

type StaticQueryWrapperProps = {
    sql?: string
    children: any
    json?: any,
    token?: string
    unitDescription?: string
}

class StaticQueryWrapper extends React.Component<StaticQueryWrapperProps, StaticQueryWrapperState> {

    constructor(props: StaticQueryWrapperProps) {
        super(props)
        this.state = {data: {}}
        this.getData = this.getData.bind(this)
    }

    public componentDidUpdate(prevProps: any) {
        // re-run query if sql is updated
        if (this.props.sql != prevProps.sql) {
            this.getData()
        }
    }

    public componentDidMount() {
        this.getData()
    }

    public render() {
        const {children, json} = this.props
        const {data} = this.state
        let childData: QueryResultBundle

        if (json !== undefined) {
            childData = json
        } else {
            childData = data
        }
        return (<div>
                    {React.Children.map(
                        children, (child: any) => {
                            return React.cloneElement(child, {
                                data: childData
                            })
                    })}
                </div>)
    }

    private getData() {
        const {token = "", json} = this.props
        if (json === undefined) {
            const queryBundleRequest: QueryBundleRequest = {
                concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
                query: {
                    isConsistent: false,
                    sql: this.props.sql!,
                    limit: 25,
                    offset: 0
                }
            }
            SynapseClient.getQueryTableResults(queryBundleRequest, token).then((data) => {
                this.setState({ data })
            })
        }
    }

}
export default StaticQueryWrapper
