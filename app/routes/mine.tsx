import { Button, Textarea } from "@nextui-org/react";
import {Form, json} from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import {prisma} from "~/prisma.server";

export const action = async (c: ActionFunctionArgs) => {
  const formData = await c.request.formData()
  const content = formData.get('content') as string
  console.log(content)
  if (!content) {
    throw new Response('Content is required')
  }
  await prisma.note.create({
    data:{
      content
    }
  })

  return json({})
};

export default function Page() {
  return (
    <div className="p-12">
      <div className="flex gap-3">
        <div className="w-[360px]">navbar</div>
        <div className="flex-1">
          <Form method="POST">
            <div className="flex flex-col gap-3">
              <Textarea minRows={10} placeholder="now idea" name='content'/>
              <Button type="submit" color="primary">
                发布
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
