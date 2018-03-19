import * as types from '../constants/ActionTypes'


export function changeFilename(filename) {
  return {
    type: types.CHANGE_FILENAME,
    filename
  }
}

export function addDatabase(database) {
  return {
    type: types.ADD_DATABASE,
    database
  }
}

export function changeGeneMode(mode) {
  return {
    type: types.CHANGE_GENE_MODE,
    mode
  }
}

export function addGeneSet(set) {
  return {
    type: types.ADD_GENE_SET,
    set
  }
}

export function changeTestType(test) {
  return {
    type: types.CHANGE_TEST_TYPE,
    test
  }
}

export function addTestValues(values) {
  return {
    type: types.ADD_TEST_VALUES,
    values
  }
}
