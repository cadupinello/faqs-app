
interface FaqsProps {
    filteredfaqs: { id: string; question: string; answer: string, image: string }[]
}
const FaqsFilter = ({ filteredfaqs }: FaqsProps) => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
    {filteredfaqs.map((faq) => (
      <div key={faq.id} className="w-full h-52 bg-slate-100 shadow-md rounded flex flex-col items-center p-4 gap-4">
        <img src={faq.image} alt={faq.question} className="w-24 h-24 rounded" />
        <p className="text-center text-md text-slate-600">{faq.question}</p>
    </div>
    ))}
    
  </div>
  )
}

export default FaqsFilter