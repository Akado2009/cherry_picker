import * as types from '../constants/ActionTypes'

const initialState = {
  filename: [],
  databases: [
    {
      id: 1,
      label: 'FIRST',
      value: true,
    },
    {
      id: 2,
      label: 'SECOND',
      value: true,
    },
    {
      id: 3,
      label: 'THIRD',
      value: true,
    },
    {
      id: 4,
      label: 'FOURTH',
      value: true,
    },
    {
      id: 5,
      label: 'FIFTH',
      value: true,
    },
    {
      id: 6,
      label: 'SIXTH',
      value: true,
    },
    {
      id: 7,
      label: 'SEVENTH',
      value: true,
    },
  ],
  selectedDatabases: [

  ],
  geneSetsMode: '',
  geneSets: [
    'ONE',
    'TWO',
    'THREE'
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
        filename: action.filename
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
          genesets: []
        }
      }
      return {
        ...state,
        geneSetsMode: action.mode
      }

    case types.ADD_GENE_SET:
      const geneSets = state.geneSets
      geneSets.indexOf(set) === -1 ? geneSets.push(set) : false
      return {
        ...state,
        getSets: geneSets
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
