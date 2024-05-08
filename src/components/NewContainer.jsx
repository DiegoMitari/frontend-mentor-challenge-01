import NewArticle from "./NewArticle"

export default function NewContainer() {
  return (
    <aside className="bg-veryDarkBlue text-offWhite py-[26px] px-[20px]">
      <h1 className="font-bold text-softOrange text-4xl">New</h1>
      <NewArticle
        title='Hydrogen VS Electric Cars'
        content='Will hydrogen-fueled cars ever catch up to EVs?'
      />
      <NewArticle
        title='The Downsides of AI Artistry'
        content='What are the possible adverse effects of on - demand AI image generation ?'
      />
      <NewArticle
        title='Is VC Funding Drying Up ?'
        content=' Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      />
    </aside>
  )
}