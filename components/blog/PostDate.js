// A post's date: the Hebrew date first, the Gregorian one quieter beside it.
// `dates` comes from formatDates() in lib/blog.js.
const PostDate = ({ iso, dates }) => (
  <time dateTime={iso}>
    {dates.hebrew}
    <span className="ms-1.5 text-xs opacity-70">({dates.gregorian})</span>
  </time>
);

export default PostDate;
