import React, { useState, useEffect } from 'react'
import { AccessRequirement } from 'lib/utils/synapseTypes/AccessRequirement/AccessRequirement'
import { getAllAccessRequirements } from 'lib/utils/SynapseClient'
import { SynapseConstants } from 'lib/utils/'
import Modal from 'react-bootstrap/Modal'
import SelfSignAccessRequirementComponent from './SelfSignAccessRequirement'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle)

type Props = {
  entityId: string
  token: string | undefined
}

enum SUPPORTED_ACCESS_REQUIREMENTS {
  SelfSignAccessRequirement = 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
  TermsOfUseAccessRequirement = 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
}

export default function AccessRequirementList({ entityId, token }: Props) {
  const [accessRequirements, setAccessRequirements] = useState<
    Array<AccessRequirement>
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getAccessRequirements = async () => {
      if (!token) {
        return
      }
      setIsLoading(true)
      try {
        const incomingAccessRequirements = await getAllAccessRequirements(
          token,
          entityId,
        )
        setAccessRequirements(
          accessRequirements.concat(incomingAccessRequirements),
        )
      } catch (err) {
        console.error('Error on get access requirements: ', err)
      } finally {
        setIsLoading(false)
      }
    }
    getAccessRequirements()
  }, [accessRequirements, token, entityId])

  /**
   * Returns rendering for the access requirement.
   *
   * Only supports SelfSignAccessRequirement and TermsOfUseAccessRequirement
   *
   * @param {AccessRequirement} accessRequirement accessRequirement being rendered
   */
  const renderAccessRequirement = (accessRequirement: AccessRequirement) => {
    switch (accessRequirement.concreteType) {
      case SUPPORTED_ACCESS_REQUIREMENTS.SelfSignAccessRequirement:
        return (
          <SelfSignAccessRequirementComponent
            accessRequirement={accessRequirement}
          />
        )
      case SUPPORTED_ACCESS_REQUIREMENTS.TermsOfUseAccessRequirement:
        return <div> TODO: Create TermsOfUseAccessRequirement component </div>
      default:
        // case not supported yet, go to synapse
        return (
          <a href="https://www.synapse.org/#!AccessRequirements:ID=syn2426151&TYPE=ENTITY">
            See Requirements on synapse.org
          </a>
        )
    }
  }

  return (
    <Modal show={true} animation={false}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Data Access Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="uppercase-text bold-text">You Requested Access For:</h4>
        <p> TODO: Entity Name </p>
        <h4 className="uppercase-text bold-text"> What do I need to do? </h4>
        <div className="requirement-container">
          {!token && (
            <>
              <div className="direction-label">1</div>
              <div>
                <p className="bold-text">
                  <button
                    className={`${SynapseConstants.SRC_SIGN_IN_CLASS} sign-in-btn`}
                  >
                    Sign in
                  </button>
                  with a Sage Platform (synapse) user account.
                </p>
                <p>
                  If you do not have a Sage Account, you can
                  <a href="https://www.synapse.org/#!RegisterAccount:0">
                    &nbsp;Register for free.
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
        {isLoading && <span className="spinner" />}
        {accessRequirements.map(req => {
          return renderAccessRequirement(req)
        })}
      </Modal.Body>
    </Modal>
  )
}
