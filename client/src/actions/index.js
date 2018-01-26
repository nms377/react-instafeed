export const GET_GRID = 'GET_GRID'

export function getGrid(images) {
  return {
  	type: 'GET_GRID',
  	images
  };
};