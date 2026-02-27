// import type { Editor } from "@tiptap/react";

// interface LessonPlan {
//   learningArea?: string;
//   gradeLevel?: string;
//   teacher?: string;
//   school?: string;
//   quarterWeek?: string;
//   lessonTitle?: string;
//   // …other fields you care about
// }

// export function parseLessonPlan(aiText: string): LessonPlan | null {
//   try {
//     // if you ask Gemini for JSON, this will succeed
//     return JSON.parse(aiText) as LessonPlan;
//   } catch {
//     // fallback: simple tag‑based parsing
//     const grab = (tag: string) =>
//       aiText.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))?.[1]?.trim();
//     if (aiText.includes("<learningArea>")) {
//       return {
//         learningArea: grab("learningArea"),
//         gradeLevel: grab("gradeLevel"),
//         teacher: grab("teacher"),
//         school: grab("school"),
//         quarterWeek: grab("quarterWeek"),
//         lessonTitle: grab("lessonTitle"),
//       };
//     }
//   }
//   return null;
// }

// export function applyLessonPlan(
//   editor: Editor | null,
//   plan: LessonPlan
// ): void {
//   if (!editor) return;
//   const html = `
//     <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
//         <tr>
//           <th>Learning Area</th>
//           <td>Mathematics</td>
//           <th>Grade Level</th>
//           <td>One</td>
//         </tr>
//         <tr>
//           <th>Teacher</th>
//           <td></td>
//           <th>School</th>
//           <td>San Jose Pilot School</td>
//         </tr>
//         <tr>
//           <th>Quarter & Week</th>
//           <td></td>
//           <th>Lesson Title</th>
//           <td>Counting Numbers 1–100</td>
//         </tr>
//       </table>

//       <br />

//       <h3>I. OBJECTIVES</h3>
//       <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
//         <tr>
//           <th style="width:30%;">Learning Competencies</th>
//           <td>Identify and count numbers from 1 to 100</td>
//         </tr>
//         <tr>
//           <th>Indicators</th>
//           <td>- Students can orally count numbers 1–100<br>- Students recognize written numbers</td>
//         </tr>
//         <tr>
//           <th>Code</th>
//           <td>MA1-N-01.01</td>
//         </tr>
//       </table>

//       <br />

//       <h3>II. SUBJECT MATTER</h3>
//       <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
//         <tr>
//           <th style="width:30%;">Topic</th>
//           <td>Counting and number recognition</td>
//         </tr>
//         <tr>
//           <th>Materials</th>
//           <td>Flashcards, Worksheets, Number chart</td>
//         </tr>
//         <tr>
//           <th>References</th>
//           <td>DepEd Curriculum Guide</td>
//         </tr>
//       </table>

//       <br />

//       <h3>III. PROCEDURES</h3>
//       <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
//         <tr>
//           <th style="width:25%;">A. Review</th>
//           <td>Review numbers 1–50 using flashcards</td>
//         </tr>
//         <tr>
//           <th>B. Motivation</th>
//           <td>Ask students to count objects in class (books, chairs)</td>
//         </tr>
//         <tr>
//           <th>C. Lesson Proper</th>
//           <td>
//             - Introduce numbers 51–100<br/>
//             - Show number chart<br/>
//             - Guided reading of numbers
//           </td>
//         </tr>
//         <tr>
//           <th>D. Application</th>
//           <td>Students complete worksheets identifying numbers 1–100</td>
//         </tr>
//       </table>

//       <br />

//       <h3>IV. EVALUATION</h3>
//       <p>Worksheet: Write and identify numbers shown on flashcards.</p>

//       <br />

//       <h3>V. ASSIGNMENT</h3>
//       <p>Write numbers 1–100 at home and color them.</p>`;
      
//   editor.chain().focus().setContent(html, true).run();
// }