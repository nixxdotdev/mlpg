import type { Editor } from "@tiptap/react";

// 1. Fully aligned Interface (matches both the expected JSON and the HTML table)
export interface LessonPlan {
  teacher?: string;
  learningArea?: string;
  school?: string;
  gradeLevel?: string;
  quarterWeek?: string;
  lessonTitle?: string;

  contentStandards?: string;
  performanceStandards?: string;
  learningCompetencies?: string;
  learningObjectives?: string;
  integration?: string;

  topicContent?: string;
  references?: string;
  otherResources?: string;

  activePriorKnowledge?: string;
  lessonPurpose?: string;
  lessonPractice?: string;

  keyIdeaReading?: string;
  keyIdeaDevUnderstanding?: string;
  keyIdeaDeepUnderstanding?: string;

  generalization?: string;
  evaluatingLearning?: string;
  additionalActivities?: string;
  remarks?: string;
}

export function parseLessonPlan(aiText: string): LessonPlan | null {
  try {
    // Primary: JSON Parse
    return JSON.parse(aiText) as LessonPlan;
  } catch {
    // Fallback: Regex Parsing
    const grab = (tag: string) =>
      aiText
        .match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))?.[1]
        ?.trim() || "";

    // If it contains at least one of our expected tags, try parsing it
    if (
      aiText.includes("<learningArea>") ||
      aiText.includes("<topicContent>")
    ) {
      return {
        learningArea: grab("learningArea"),
        gradeLevel: grab("gradeLevel"),
        teacher: grab("teacher"),
        school: grab("school"),
        quarterWeek: grab("quarterWeek"),
        lessonTitle: grab("lessonTitle"),
        contentStandards: grab("contentStandards"),
        performanceStandards: grab("performanceStandards"),
        learningCompetencies: grab("learningCompetencies"),
        learningObjectives: grab("learningObjectives"),
        integration: grab("integration"),
        topicContent: grab("topicContent"),
        references: grab("references"),
        otherResources: grab("otherResources"),
        activePriorKnowledge: grab("activePriorKnowledge"),
        lessonPurpose: grab("lessonPurpose"),
        lessonPractice: grab("lessonPractice"),
        keyIdeaReading: grab("keyIdeaReading"),
        keyIdeaDevUnderstanding: grab("keyIdeaDevUnderstanding"),
        keyIdeaDeepUnderstanding: grab("keyIdeaDeepUnderstanding"),
        generalization: grab("generalization"),
        evaluatingLearning: grab("evaluatingLearning"),
        additionalActivities: grab("additionalActivities"),
        remarks: grab("remarks"),
      };
    }
  }
  return null;
}

export function applyLessonPlan(editor: Editor | null, plan: LessonPlan): void {
  if (!editor) return;

  // 2. We now inject the 'plan' variables into the HTML using ${plan.property || ''}
  const html = `
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th>Name of Teacher</th>
        <td>${plan.teacher || ""}</td>
        <th>Learning Area</th>
        <td>${plan.learningArea || "Mathematics"}</td>
      </tr>  
      <tr>
        <th>School</th>
        <td>${plan.school || "San Jose Pilot School"}</td>
        <th>Grade Level</th>
        <td>${plan.gradeLevel || "One"}</td>
      </tr>
    </table>

    <br />

    <h3>I. CURRICULUM CONTENT, STANDARDS, AND LESSON COMPETENCIES</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:30%;">A. Content Standards</th>
        <td>${plan.contentStandards || ""}</td>
      </tr>
      <tr>
        <th>B. Performance Standards</th>
        <td>${plan.performanceStandards || ""}</td>
      </tr>
      <tr>
        <th>C. Learning Competencies</th>
        <td>${plan.learningCompetencies || ""}</td>
      </tr>
      <tr>
        <th>D. Learning Objectives</th>
        <td>${plan.learningObjectives || ""}</td>
      </tr>
      <tr>
        <th>E. Integration</th>
        <td>${plan.integration || ""}</td>
      </tr>        
    </table>

    <br />

    <h3>II. CONTENT</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:30%;">Topic Content</th>
        <td>${plan.topicContent || ""}</td>
      </tr>
    </table>

    <br />

    <h3>III. LEARNING RESOURCES</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:25%;">A. References</th>
        <td>${plan.references || ""}</td>
      </tr>
      <tr>
        <th>B. Other Learning Resources</th>
        <td>${plan.otherResources || ""}</td>
      </tr>
    </table>

    <br />

    <h3>IV. TEACHING AND LEARNING PROCEDURES</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:30%;">A. Panimulang Gawain (Activating Prior Knowledge)</th>
        <td>${plan.activePriorKnowledge || ""}</td>
      </tr>
      <tr>
        <th>B. Gawaing Paglalahad ng Layunin ng Aralin (Lesson Purpose/Intention)</th>
        <td>${plan.lessonPurpose || ""}</td>
      </tr>
      <tr>
        <th>C. Gawaing Pag-unawa sa mga Susing- Salita/Parirala (Lesson Language Practice)</th>
        <td>${plan.lessonPractice || ""}</td>
      </tr>
    </table>

    <br />

    <h3>V. DURING/LESSON PROPER</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:30%;">D. Pagbasa sa Mahahalagang Pag-unawa (Reading the Key Idea) </th>
        <td>${plan.keyIdeaReading || ""}</td>
      </tr>
      <tr>
        <th>E. Pagpapaunlad ng Kaalaman (Developing Understanding)</th>
        <td>${plan.keyIdeaDevUnderstanding || ""}</td>
      </tr>
      <tr>
        <th>F. Pagpapalalim ng Kaalaman (Deepening Understanding) </th>
        <td>${plan.keyIdeaDeepUnderstanding || ""}</td>
      </tr>
    </table>

    <br />
    
    <h3>VI. AFTER/POST-LESSON PROPER</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
        <th style="width:30%;">G. Paglalapat at Paglalahat (Making Generalizations) </th>
        <td>${plan.generalization || ""}</td>
      </tr>
      <tr>
        <th>H. Pagtataya ng Natutuhan (Evaluating Learning) </th>
        <td>${plan.evaluatingLearning || ""}</td>
      </tr>
      <tr>
        <th>I. Mga Dagdag na Gawain (Additional Activities) </th>
        <td>${plan.additionalActivities || ""}</td>
      </tr>
      <tr>
        <th>J. Remarks</th>
        <td>${plan.remarks || ""}</td>
      </tr>
    </table>`;

  editor.chain().focus().setContent(html).run();
}
