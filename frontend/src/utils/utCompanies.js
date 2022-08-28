export const createNode = (htmlStr) => {
  const doc = new DOMParser().parseFromString(htmlStr, 'text/html');
  const element = doc.body.children;
  return element;
};
