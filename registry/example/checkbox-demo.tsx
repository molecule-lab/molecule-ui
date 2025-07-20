import { Checkbox } from "@/registry/molecule-ui/checkbox"

export function CheckboxExample() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Checkbox />
        <div>Accept Terms and Condition</div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked />
        <div>Accept Terms and Condition</div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white "
        />
        <div>Enable Notification</div>
      </div>
    </div>
  )
}
