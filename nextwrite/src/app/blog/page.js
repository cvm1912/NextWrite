import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function blog() {
  return (
    <div className="px-4 py-8 bg-white-200 min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-6 sm:p-10 md:p-14 flex flex-col gap-6 border-2 border-gray-300 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Write your Blog here.</h1>
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title" className="text-base sm:text-lg md:text-2xl">Title</FieldLabel>
              <Input id="title" placeholder="write your title." className="p-4 sm:p-6 md:p-8"/>
            </Field>
            <Field>
              <FieldLabel htmlFor="description" className="text-base sm:text-lg md:text-2xl">Description</FieldLabel>
              <Input
                id="description"
                type="text"
                placeholder="write your description."
                className="p-4 sm:p-6 md:p-8"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit" className="w-full p-4 sm:p-6 md:p-8">Submit</Button>
            </Field>
          </FieldGroup>
        </Card>
      </div>
    </div>
  );
}
