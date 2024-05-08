export default function NewArticle({ title, content }) {
  return (
    <article className="h-[140px] border-b-2 py-4 border-grayishBlue last:border-b-0">
      <h2 className="font-bold pb-2 hover:text-softOrange cursor-pointer text-base">{title}</h2>
      <p className="text-grayishBlue text-base">{content}</p>
    </article>
  )
}