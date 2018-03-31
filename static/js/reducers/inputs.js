import * as types from '../constants/ActionTypes'

const initialState = {
  filename: [],
  databases: [
    {
      id: 1,
      label: 'GO',
      value: false,
    },
    {
      id: 2,
      label: 'WIKI PATHWAYS',
      value: false,
    },
    {
      id: 3,
      label: 'REACTOME',
      value: false,
    }
  ],
  selectedDatabases: [

  ],
  geneSetsMode: '',
  geneSets: [
    {
      id: 1,
      label: 'First set',
      value: false,
    },
    {
      id: 2,
      label: 'Second set',
      value: false,
    },
    {
      id: 3,
      label: 'Third set',
      value: false,
    }
  ],
  testTypeMode: '',
  testTypeChosen: [

  ]
};



export default function inputs(state = initialState, action) {
  switch (action.type) {

    case types.CHANGE_FILENAME:
      return {
        ...state,
        filename: [action.filename]
      }

    case types.ADD_DATABASE:
      return {
        ...state,
        databases: action.database
      }

    case types.CHANGE_GENE_MODE:
      if (action.mode == 'custom') {
        return {
          ...state,
          geneSetsMode: action.mode
        }
      }
      return {
        ...state,
        geneSetsMode: action.mode
      }

    case types.ADD_GENE_SET:
      console.log(action)
      return {
        ...state,
        geneSets: action.set
      }

    case types.CHANGE_TEST_TYPE:
      return {
        ...state,
        testTypeMode: action.test
      }

    case types.ADD_TEST_VALUES:
      return {
        ...state,
        testTypeChosen: action.values
      }

    default:
      return state
  }
}
