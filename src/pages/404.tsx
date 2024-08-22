import Empty from "@/components/Empty"
import Base from "@/templates/Base"

export default function Page404() {
  return (
    <Base>
      <div className="container">
        <Empty
          title="404: Not Found"
          description="Ops...esta página não existe!"
          hasLink></Empty>
      </div>
    </Base>
  )
}
