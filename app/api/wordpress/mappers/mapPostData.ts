/* 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapPostData = (rawPost: any): WordPressPos => ({
  id: rawPost.id,
  title: rawPost.title.rendered,
  content: rawPost.content.rendered,
  date: new Date(rawPost.date),
  customFields: rawPost.acf,
});
 */