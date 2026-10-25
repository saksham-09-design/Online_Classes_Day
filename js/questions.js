/**
 * Question Bank for Online Education Day Quiz
 * 25 AI Questions + 25 Excel Questions
 * Author: Saksham Loona
 */

const QUESTION_BANK = {
  ai: [
    {
      id: "ai-1",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What does the acronym 'LLM' stand for in modern Artificial Intelligence?",
      options: [
        "Large Language Model",
        "Linear Logic Machine",
        "Layered Learning Mechanism",
        "Linked Language Matrix"
      ],
      answer: 0,
      explanation: "LLM stands for Large Language Model, an AI system trained on vast amounts of text to understand and generate human-like language."
    },
    {
      id: "ai-2",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is 'Prompt Engineering'?",
      options: [
        "Fixing computer hardware and server connections",
        "The practice of structuring and refining text inputs to get optimal results from AI",
        "Writing machine code directly into AI microchips",
        "Designing physical keyboards for faster typing"
      ],
      answer: 1,
      explanation: "Prompt engineering is the art and science of formulating clear, contextual, and structured prompts to guide AI models to accurate outputs."
    },
    {
      id: "ai-3",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which of the following is a leading AI tool specifically renowned for photorealistic image generation?",
      options: [
        "Midjourney",
        "VLC Media Player",
        "Apache Spark",
        "Postman"
      ],
      answer: 0,
      explanation: "Midjourney is a premier generative AI tool that creates high-resolution imagery and artwork from textual descriptions."
    },
    {
      id: "ai-4",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What does an AI 'hallucination' refer to?",
      options: [
        "When the AI screen turns completely black",
        "When an AI generates incorrect or fabricated information with high confidence",
        "When the AI server runs out of storage space",
        "When an AI starts speaking in a robotic accent"
      ],
      answer: 1,
      explanation: "AI hallucination occurs when an AI model presents plausible-sounding but factually inaccurate or invented details as truth."
    },
    {
      id: "ai-5",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "In prompt engineering, what does 'Few-Shot Prompting' mean?",
      options: [
        "Giving the AI only 3 seconds to generate an answer",
        "Providing the AI with a few relevant examples before asking it to perform the task",
        "Asking questions only in short bullet points",
        "Restarting the prompt multiple times if the first shot fails"
      ],
      answer: 1,
      explanation: "Few-shot prompting provides the model with a few exemplar input-output pairs to demonstrate the desired format and style."
    },
    {
      id: "ai-6",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which company developed the Claude family of AI models?",
      options: [
        "Anthropic",
        "Tesla",
        "Intel",
        "Oracle"
      ],
      answer: 0,
      explanation: "Claude is a family of foundational AI models created by Anthropic, renowned for safety, reasoning, and large context windows."
    },
    {
      id: "ai-7",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is the primary function of a 'System Prompt' in conversational AI?",
      options: [
        "To restart the computer operating system",
        "To set foundational rules, persona, behavioral boundaries, and tone for the AI session",
        "To measure CPU usage of the AI server",
        "To install third-party antivirus software"
      ],
      answer: 1,
      explanation: "A system prompt instructs the AI model on how to behave, defining its identity, tone, response formatting, and safety guardrails."
    },
    {
      id: "ai-8",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which AI-powered search and answer engine provides live web search with inline citations?",
      options: [
        "Perplexity AI",
        "WinRAR",
        "FileZilla",
        "Audacity"
      ],
      answer: 0,
      explanation: "Perplexity AI is a conversational search engine that scans the live web and provides answers backed by source citations."
    },
    {
      id: "ai-9",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "In natural language processing, what is a 'Token'?",
      options: [
        "A physical coin used to purchase AI software",
        "A chunk of text (characters or parts of words) that AI models process and predict",
        "An encrypted password for logging into an AI account",
        "A digital NFT created by an artist"
      ],
      answer: 1,
      explanation: "Tokens are the basic building blocks of text for language models; 1 token is roughly equivalent to 4 characters or 0.75 words in English."
    },
    {
      id: "ai-10",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which AI tool is popular for generating complete slide decks and presentations from a single prompt?",
      options: [
        "Gamma App",
        "Notepad",
        "Paint 3D",
        "Disk Cleanup"
      ],
      answer: 0,
      explanation: "Gamma is an AI-powered medium that generates beautifully styled presentations, documents, and web pages from text prompts in seconds."
    },
    {
      id: "ai-11",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What does 'Zero-Shot Prompting' mean?",
      options: [
        "Prompting without providing any prior examples for the task",
        "Prompting without using the keyboard",
        "Using AI with zero internet connection",
        "Sending an empty prompt message"
      ],
      answer: 0,
      explanation: "Zero-shot prompting refers to asking the model to perform a task immediately based solely on instructions without providing examples."
    },
    {
      id: "ai-12",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What does the 'Temperature' parameter adjust in generative AI models?",
      options: [
        "The physical temperature of the computer's CPU",
        "The level of creativity, unpredictability, and randomness in the output",
        "The brightness of the AI user interface",
        "The speed of network data transfer"
      ],
      answer: 1,
      explanation: "Higher temperature (e.g. 0.8) yields more diverse, creative text, while lower temperature (e.g. 0.2) yields more deterministic, focused answers."
    },
    {
      id: "ai-13",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which open-source AI speech recognition system was developed by OpenAI for accurate transcription?",
      options: [
        "Whisper",
        "Shazam",
        "Siri Voice",
        "SoundCloud"
      ],
      answer: 0,
      explanation: "Whisper is an automatic speech recognition system trained on hundreds of thousands of hours of multilingual audio data."
    },
    {
      id: "ai-14",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is 'Role Prompting'?",
      options: [
        "Instructing the AI to adopt a specific persona, such as an experienced financial analyst or tutor",
        "Assigning user passwords to team members",
        "Changing user roles in Windows Administration",
        "Rotating shifts among human programmers"
      ],
      answer: 0,
      explanation: "Role prompting involves giving the AI a persona ('Act as a senior data analyst...'), which steers its tone, terminology, and problem-solving perspective."
    },
    {
      id: "ai-15",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is a major advantage of having a curated 'AI Prompt Book'?",
      options: [
        "It eliminates the need for internet access completely",
        "It provides battle-tested, reusable prompt templates that deliver consistent, high-quality results",
        "It replaces the computer graphics card",
        "It automatically reboots the computer every hour"
      ],
      answer: 1,
      explanation: "An AI Prompt Book gives professionals proven frameworks and formulas to tackle everyday workflows quickly without trial and error."
    },
    {
      id: "ai-16",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which multimodal AI model family is developed by Google?",
      options: [
        "Gemini",
        "Copilot",
        "DALL-E",
        "Midjourney"
      ],
      answer: 0,
      explanation: "Gemini is Google's state-of-the-art multimodal AI model family built from the ground up to reason seamlessly across text, audio, images, and code."
    },
    {
      id: "ai-17",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is 'Chain-of-Thought' (CoT) prompting?",
      options: [
        "Asking the AI to explain its step-by-step reasoning process before arriving at the final answer",
        "Connecting multiple AI servers with physical metal chains",
        "Looping the same prompt 10 times consecutively",
        "Translating text across 5 languages in a circle"
      ],
      answer: 0,
      explanation: "Chain-of-thought prompting prompts the AI to 'think step by step', which significantly boosts accuracy on complex logic and math tasks."
    },
    {
      id: "ai-18",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What does 'Multimodal AI' mean?",
      options: [
        "An AI that can process and understand multiple data types such as text, images, video, and audio",
        "An AI that only works in dark mode",
        "An AI that can only run on two computer monitors",
        "An AI that requires two users typing simultaneously"
      ],
      answer: 0,
      explanation: "Multimodal AI systems can understand, correlate, and generate outputs across various media modalities including text, vision, and speech."
    },
    {
      id: "ai-19",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "When interacting with public AI tools, what safety practice should you always follow?",
      options: [
        "Never share sensitive personal credentials, confidential financial data, or secret passwords",
        "Never type more than 10 words",
        "Always use uppercase capital letters only",
        "Disconnect your monitor before pressing Enter"
      ],
      answer: 0,
      explanation: "For data security and privacy, proprietary data, passwords, and sensitive personally identifiable information (PII) should never be fed into public models."
    },
    {
      id: "ai-20",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which AI feature enables Adobe Photoshop to automatically fill, replace, or expand image canvas seamlessly?",
      options: [
        "Generative Fill",
        "Magic Eraser 1.0",
        "Pixel Blender",
        "Bitmap Clipper"
      ],
      answer: 0,
      explanation: "Adobe Photoshop's Generative Fill leverages Adobe Firefly AI to add, remove, or expand photo content with realistic lighting and perspective."
    },
    {
      id: "ai-21",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is 'Context Window' in a Large Language Model?",
      options: [
        "The physical glass window in a computer server room",
        "The maximum amount of text/tokens an AI model can remember and consider in a single conversation",
        "The browser pop-up that appears upon launching ChatGPT",
        "The size of the chat box on the screen"
      ],
      answer: 1,
      explanation: "The context window represents the total capacity of tokens (input plus output) an AI can keep in active memory during an interaction."
    },
    {
      id: "ai-22",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is an AI 'Agent'?",
      options: [
        "A physical robot salesperson in a store",
        "An autonomous AI system capable of breaking down goals, using tools, executing tasks, and taking action",
        "A human employee testing software",
        "A simple spell check extension"
      ],
      answer: 1,
      explanation: "AI Agents combine LLM reasoning with tool calling, memory, and planning to autonomously execute multi-step workflows."
    },
    {
      id: "ai-23",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "Which of the following is an effective technique to prevent an AI from generating overly generic advice?",
      options: [
        "Provide specific constraints, target audience, format, and clear examples",
        "Use vague one-word prompts like 'help' or 'write'",
        "Avoid giving any context or background",
        "Repeat the word 'good' five times"
      ],
      answer: 0,
      explanation: "Constraining your prompt with audience, tone, length, exclusions, and real examples dramatically improves AI output specificity and relevance."
    },
    {
      id: "ai-24",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "What is the primary breakthrough behind modern LLMs introduced in the landmark 2017 paper 'Attention Is All You Need'?",
      options: [
        "The Transformer Architecture",
        "The Binary Search Tree",
        "The Relational Database",
        "The Microprocessor"
      ],
      answer: 0,
      explanation: "The Transformer architecture, featuring self-attention mechanisms, revolutionized AI by allowing models to process text context in parallel."
    },
    {
      id: "ai-25",
      topic: "ai",
      topicName: "Ultimate AI Toolkit",
      question: "How do modern AI tools provide the highest value in day-to-day work?",
      options: [
        "By augmenting human intellect, speeding up drafting, and automating routine repetitive chores",
        "By replacing the need for any human thinking or review",
        "By slowing down computer performance",
        "By deleting unorganized files automatically"
      ],
      answer: 0,
      explanation: "AI acts as a force multiplier—augmenting creativity, streamlining tedious tasks, and enabling professionals to focus on high-impact strategic decisions."
    }
  ],

  excel: [
    {
      id: "ex-1",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which built-in Excel feature automatically senses patterns in your data and fills in the rest without formulas?",
      options: [
        "Flash Fill (Ctrl + E)",
        "AutoSum",
        "Spell Check",
        "Conditional Formatting"
      ],
      answer: 0,
      explanation: "Flash Fill (Ctrl+E) uses smart pattern recognition to extract, combine, or reformat data automatically based on your first example."
    },
    {
      id: "ex-2",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which modern function in MS Excel replaced VLOOKUP and HLOOKUP with bidirectional, error-resilient searches?",
      options: [
        "XLOOKUP",
        "SUPERLOOKUP",
        "INDEXSEARCH",
        "QUICKFIND"
      ],
      answer: 0,
      explanation: "XLOOKUP can search in any direction (left or right), defaults to exact matches, and includes built-in 'if_not_found' handling."
    },
    {
      id: "ex-3",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What does the 'Analyze Data' (formerly Ideas) button in Excel do?",
      options: [
        "Uses AI to summarize your data, uncover trends, and automatically generate relevant PivotTables and charts",
        "Deletes all empty rows in your workbook",
        "Checks your formulas for spelling mistakes only",
        "Converts your file into a PDF document"
      ],
      answer: 0,
      explanation: "Analyze Data in Excel leverages natural language queries and machine learning to analyze datasets and suggest visual charts and key summaries."
    },
    {
      id: "ex-4",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which symbol is placed in front of column letters or row numbers to make a cell reference 'Absolute' ($)?",
      options: [
        "Dollar Sign ($)",
        "At Symbol (@)",
        "Hashtag (#)",
        "Ampersand (&)"
      ],
      answer: 0,
      explanation: "The dollar sign ($), such as $A$1, locks cell references so they do not shift when you copy formulas to other cells."
    },
    {
      id: "ex-5",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What is Microsoft Copilot in Excel primarily designed to help users do?",
      options: [
        "Generate complex formulas, highlight data trends, and create visualizations from natural language prompts",
        "Repair cracked computer screens",
        "Send physical letters through postal mail",
        "Format hard drives automatically"
      ],
      answer: 0,
      explanation: "Copilot in Excel uses generative AI to let users query data, create calculated columns, and generate charts using conversational prompts."
    },
    {
      id: "ex-6",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What is the fastest keyboard shortcut to instantly insert an AutoSum formula in Windows Excel?",
      options: [
        "Alt + =",
        "Ctrl + Shift + S",
        "Ctrl + Alt + Enter",
        "Shift + F1"
      ],
      answer: 0,
      explanation: "Pressing 'Alt + =' instantly adds the SUM function for the adjacent rows or columns of numbers."
    },
    {
      id: "ex-7",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which powerful feature in Excel allows you to slice, dice, summarize, and aggregate thousands of data rows without writing code?",
      options: [
        "Pivot Table",
        "Data Validation",
        "Format Painter",
        "Goal Seek"
      ],
      answer: 0,
      explanation: "PivotTables allow users to quickly reorganize and summarize complex datasets by dragging and dropping fields into rows, columns, and values."
    },
    {
      id: "ex-8",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which error code appears in Excel when a calculation attempts to divide a number by zero or an empty cell?",
      options: [
        "#DIV/0!",
        "#VALUE!",
        "#N/A",
        "#NAME?"
      ],
      answer: 0,
      explanation: "Excel displays #DIV/0! when a number is divided by 0, which is mathematically undefined."
    },
    {
      id: "ex-9",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which feature automatically changes a cell's color, background, or icon based on its value meeting predefined rules?",
      options: [
        "Conditional Formatting",
        "Cell Shading Brush",
        "Color Wheel",
        "Font Styler"
      ],
      answer: 0,
      explanation: "Conditional Formatting dynamically highlights critical information (like high sales or overdue deadlines) using colors, data bars, and icons."
    },
    {
      id: "ex-10",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What function counts the number of cells within a specified range that contain numbers?",
      options: [
        "COUNT",
        "COUNTA",
        "COUNTBLANK",
        "NUMBERS"
      ],
      answer: 0,
      explanation: "The COUNT function counts cells containing numbers, while COUNTA counts all non-empty cells."
    },
    {
      id: "ex-11",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What does the IF function in MS Excel do?",
      options: [
        "Evaluates a condition and returns one value if TRUE, and another value if FALSE",
        "Finds all cells that start with the letter I",
        "Imports data from the internet automatically",
        "Deletes inactive worksheets"
      ],
      answer: 0,
      explanation: "The IF function (=IF(logical_test, value_if_true, value_if_false)) enables conditional logic in spreadsheets."
    },
    {
      id: "ex-12",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which function combines text strings from different cells and allows you to specify a delimiter (like a comma or space)?",
      options: [
        "TEXTJOIN",
        "SPLITTEXT",
        "MERGECELLS",
        "COMBINE"
      ],
      answer: 0,
      explanation: "TEXTJOIN joins a range of text strings with a custom delimiter and includes an option to ignore empty cells."
    },
    {
      id: "ex-13",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What tool in Excel allows you to restrict user entries to specific values, such as an in-cell dropdown list?",
      options: [
        "Data Validation",
        "Conditional Formatting",
        "Protect Sheet",
        "Cell Locker"
      ],
      answer: 0,
      explanation: "Data Validation ensures data integrity by constraining user inputs to valid numbers, dates, or items from a dropdown list."
    },
    {
      id: "ex-14",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which keyboard shortcut allows you to quickly edit the active cell without using the mouse?",
      options: [
        "F2",
        "F5",
        "F7",
        "F12"
      ],
      answer: 0,
      explanation: "Pressing F2 activates cell edit mode, placing the cursor directly at the end of the cell's contents."
    },
    {
      id: "ex-15",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "If a cell shows '######' across its width, what does that usually mean?",
      options: [
        "The column is too narrow to display the formatted number or date",
        "The cell contains a virus",
        "The calculation has an infinite loop error",
        "The font color is matching the background"
      ],
      answer: 0,
      explanation: "'######' indicates that the column width is simply too narrow to display the formatted numeric or date value."
    },
    {
      id: "ex-16",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which Excel function capitalizes the first letter of each word and converts all other letters to lowercase?",
      options: [
        "PROPER",
        "UPPER",
        "CAPITALIZE",
        "TITLECASE"
      ],
      answer: 0,
      explanation: "=PROPER('john doe') returns 'John Doe', making it ideal for cleaning up customer and student names."
    },
    {
      id: "ex-17",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "How can AI tools (like ChatGPT or Copilot) supercharge your Excel productivity?",
      options: [
        "By instantly translating plain English goals into nested formulas, VBA macros, and troubleshooting error messages",
        "By replacing the need for an operating system",
        "By printing spreadsheets on paper automatically",
        "By deleting unused software from your PC"
      ],
      answer: 0,
      explanation: "AI serves as an on-demand spreadsheet tutor: explaining complex formulas, debugging error codes, and generating custom formulas from natural language."
    },
    {
      id: "ex-18",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which chart type is best suited for showing trends and changes over continuous intervals like time or months?",
      options: [
        "Line Chart",
        "Pie Chart",
        "Doughnut Chart",
        "Radar Chart"
      ],
      answer: 0,
      explanation: "Line charts connect data points over time, making them the standard choice for visualizing sales trends, revenue growth, or metrics."
    },
    {
      id: "ex-19",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What function calculates the arithmetic mean of numbers in a selected range?",
      options: [
        "AVERAGE",
        "MEAN",
        "MEDIAN",
        "AVG"
      ],
      answer: 0,
      explanation: "The =AVERAGE(range) function computes the sum of all numerical values divided by the count of those numbers."
    },
    {
      id: "ex-20",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which function returns the current system date and current time dynamically in Excel?",
      options: [
        "NOW()",
        "TODAY()",
        "CURRENT()",
        "DATETIME()"
      ],
      answer: 0,
      explanation: "=NOW() returns both the current date and time, while =TODAY() returns only the current date."
    },
    {
      id: "ex-21",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Where is the 'Remove Duplicates' feature located in Excel's ribbon menu?",
      options: [
        "Data Tab -> Data Tools",
        "Home Tab -> Clipboard",
        "View Tab -> Window",
        "Formulas Tab -> Defined Names"
      ],
      answer: 0,
      explanation: "Remove Duplicates is located on the Data tab under Data Tools, enabling one-click deduplication across selected columns."
    },
    {
      id: "ex-22",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which function extracts a specified number of characters from the beginning (leftmost side) of a text string?",
      options: [
        "LEFT",
        "START",
        "FIRST",
        "EXTRACT"
      ],
      answer: 0,
      explanation: "=LEFT(text, [num_chars]) extracts characters from the start of a string (e.g. =LEFT('Saksham', 3) returns 'Sak')."
    },
    {
      id: "ex-23",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What function removes all extra spaces from text except for single spaces between words?",
      options: [
        "TRIM",
        "CLEAN",
        "REMOVE_SPACES",
        "STRIP"
      ],
      answer: 0,
      explanation: "The TRIM function cleans imported text by removing leading, trailing, and repeated interior spaces."
    },
    {
      id: "ex-24",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "What does the SUMIFS function allow you to do that basic SUM cannot?",
      options: [
        "Sum cells that meet multiple specific criteria across different ranges",
        "Sum only negative numbers",
        "Sum numbers across closed workbooks without opening Excel",
        "Calculate the square root of numbers before adding them"
      ],
      answer: 0,
      explanation: "SUMIFS sums values in a range that meet one or more conditions (e.g. Region = 'North' AND Sales > 5000)."
    },
    {
      id: "ex-25",
      topic: "excel",
      topicName: "MS Excel with AI",
      question: "Which keyboard shortcut toggles absolute and relative cell references (adds or cycles $ signs) while editing a formula?",
      options: [
        "F4",
        "F8",
        "Ctrl + Shift + A",
        "Alt + D"
      ],
      answer: 0,
      explanation: "Pressing F4 while highlighting a cell reference in a formula cycles through $A$1, A$1, $A1, and A1."
    }
  ]
};

/**
 * Utility to pick N random non-repeating items from an array
 */
function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}
