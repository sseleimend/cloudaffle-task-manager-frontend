import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OrderSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select order" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="dsc">Dsc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
