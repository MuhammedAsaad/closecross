// eslint-disable-next-line import/prefer-default-export
export const getContent = (response) => {
  const { data } = response;
  if (data.status) {
    return data.data;
  }
  throw new Error(data.error);
};
