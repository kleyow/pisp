import TestEnv from '../e2e/TestEnv'
import axios from 'axios'

/**
 * @name ThirdpartyRequestsTransactions
 * @description Thirdparty Requests Transactions Tests
 */
describe('GET Thirdparty Requests Transaction Tests', () => {
  // it('Test GET /thirdpartyRequest/transaction/{ID} request', async () => {
  // })

  it('Test POST /thirdpartyRequests/transactions request', async () => {
    const tprURI = `${TestEnv.baseUrls.mlTestingToolkit}/thirdpartyRequests/transactions`
    const options = {
      transactionRequestId: '02e28448-3c05-4059-b5f7-d518d0a2d8ea',
      sourceAccountId: 'dfspa.alice.1234',
      consentId: 'ddab7438-a8a8-2dc0-b6bf-25c8e28a7561',
      payee: {
        partyIdInfo: {
          partyIdType: 'MSISDN',
          partyIdentifier: '+4412345678',
          fspId: 'dfspb'
        }
      },
      payer: {
        personalInfo: {
          complexName: {
            firstName: 'Ayesha',
            lastName: 'Takia'
          }
        },
        partyIdInfo: {
          partyIdType: 'MSISDN',
          partyIdentifier: '+44 8765 4321',
          fspId: 'dfspa'
        }
      },
      amountType: 'SEND',
      amount: {
        amount: '100',
        currency: 'USD'
      },
      transactionType: {
        scenario: 'TRANSFER',
        initiator: 'PAYER',
        initiatorType: 'CONSUMER'
      },
      expiration: '2016-05-24T08:38:08.699-04:00'
    }
    const headers = {
      headers: {
        'Content-Type': 'application/vnd.interoperability.thirdparty+json;version=1.0',
        Accept: 'application/vnd.interoperability.thirdparty+json;version=1.0',
        'FSPIOP-Source': 'pisp',
        Date: 'Wed, 03 Jun 2020 08:22:12 GMT'
      }
    }
    const result = await axios.post(tprURI, options, headers)
    // Assert
    expect(result.status).toBe(202)
  })

  // it('Test PUT /thirdpartyRequest/transaction/{ID} request', async () => {
  // })
})
