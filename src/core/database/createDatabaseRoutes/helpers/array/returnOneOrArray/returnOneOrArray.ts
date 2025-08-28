/** If data.length === 1 returns an entity, else returns an array of entities */
export const returnOneOrArray = (data: any) => {
  if (data.length === 1) {
    return data[0];
  } else {
    return data;
  }
};
