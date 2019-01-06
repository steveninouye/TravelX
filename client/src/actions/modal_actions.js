export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (name) => {
  return {
    type: OPEN_MODAL,
    name
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
