import { varchar, pgTable, text, serial } from "drizzle-orm/pg-core";

export const ai_mock_interview = pgTable("aimockinterview", {
    id: serial("id").primaryKey(),  // ✅ Correct: Use `serial()` for auto-incrementing IDs in PostgreSQL
    jsonMockResp: text("jsonMockResp").notNull(),
    jobPosition: varchar("jobPosition", 255).notNull(),  // ✅ Added length (required for varchar)
    jobDesc: varchar("jobDesc", 255).notNull(),
    jobExperience: varchar("jobExperience", 255).notNull(),
    createdBy: varchar("createdby", 255).notNull(),
    createdAt: varchar("createdAt", 255), // ✅ No `.notNull()` since it's optional
    mockId: varchar("mockId", 255).notNull(),
});

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),

})
