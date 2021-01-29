const handleFetchErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  
  return response;
}

export {
  handleFetchErrors
};
