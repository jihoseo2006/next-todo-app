// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
// //   const data = [
// //     {id: 1, text: "집에가기"},
// //     {id: 2, text: "밥먹기"},
// //     {id: 3, text: "과제하기"},
// //     {id: 4, text: "test"},
// //     {id: 5, text: "test"},
// //     {id: 6, text: "test"}
// //   ]
// // }


//



// // pages/api/todos.js
// let todos = [
//   { id: 1, text: "할 일 1", completed: false },
//   { id: 2, text: "할 일 2", completed: false },
// ];

// export default function handler(req: any, res: any) {
//   if (req.method === 'GET') {
//       // 목록 조회
//       res.status(200).json(todos);
//   } else if (req.method === 'POST') {
//       // 목록 추가
//       const newTodo = { id: Date.now(), text: req.body.text, completed: false };
//       todos.push(newTodo);
//       res.status(201).json(newTodo);
//   } else if (req.method === 'PUT') {
//       // 목록 수정
//       const { id, text } = req.body;
//       const todoIndex = todos.findIndex(todo => todo.id === id);
//       if (todoIndex > -1) {
//           todos[todoIndex].text = text;
//           res.status(200).json(todos[todoIndex]);
//       } else {
//           res.status(404).json({ message: "할 일을 찾을 수 없습니다." });
//       }
//   } else if (req.method === 'DELETE') {
//       // 목록 삭제
//       const { id } = req.body;
//       todos = todos.filter(todo => todo.id !== id);
//       res.status(204).end();
//   } else {
//       res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }