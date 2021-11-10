let id: number = parseInt(window.localStorage.getItem('_idMax_') || '0') || 0;

function createdID() {
  id++;
  window.localStorage.setItem('_idMax_', id.toString());
  return id;

}

export default createdID;