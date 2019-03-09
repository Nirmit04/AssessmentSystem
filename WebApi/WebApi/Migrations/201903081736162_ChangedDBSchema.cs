namespace WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedDBSchema : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.QuizQuestions",
                c => new
                    {
                        QuizQuestionId = c.Int(nullable: false, identity: true),
                        QuizId = c.Int(nullable: false),
                        QuestionId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuizQuestionId)
                .ForeignKey("dbo.Questions", t => t.QuestionId, cascadeDelete: true)
                .ForeignKey("dbo.Quizs", t => t.QuizId, cascadeDelete: true)
                .Index(t => t.QuizId)
                .Index(t => t.QuestionId);
            
            DropColumn("dbo.User", "Role");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "Role", c => c.String());
            DropForeignKey("dbo.QuizQuestions", "QuizId", "dbo.Quizs");
            DropForeignKey("dbo.QuizQuestions", "QuestionId", "dbo.Questions");
            DropIndex("dbo.QuizQuestions", new[] { "QuestionId" });
            DropIndex("dbo.QuizQuestions", new[] { "QuizId" });
            DropTable("dbo.QuizQuestions");
        }
    }
}
