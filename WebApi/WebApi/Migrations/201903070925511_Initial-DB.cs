namespace WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DetailedReports",
                c => new
                    {
                        DetailedReportId = c.Int(nullable: false, identity: true),
                        AttemptedAnswer = c.Int(nullable: false),
                        QuizId = c.Int(nullable: false),
                        QuestionId = c.Int(nullable: false),
                        UserId = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.DetailedReportId)
                .ForeignKey("dbo.Questions", t => t.QuestionId, cascadeDelete: true)
                .ForeignKey("dbo.Quizs", t => t.QuizId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserId)
                .Index(t => t.QuizId)
                .Index(t => t.QuestionId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Questions",
                c => new
                    {
                        QuestionId = c.Int(nullable: false, identity: true),
                        QuestionStatement = c.String(),
                        Option1 = c.String(),
                        Option2 = c.String(),
                        Option3 = c.String(),
                        Option4 = c.String(),
                        Answer = c.Int(nullable: false),
                        Marks = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ImageName = c.String(),
                        Difficulty = c.String(),
                        SubjectId = c.Int(nullable: false),
                        CreatedBy = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.QuestionId)
                .ForeignKey("dbo.Subjects", t => t.SubjectId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.CreatedBy)
                .Index(t => t.SubjectId)
                .Index(t => t.CreatedBy);
            
            CreateTable(
                "dbo.Subjects",
                c => new
                    {
                        SubjectId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Department = c.String(),
                        CreatedBy = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.SubjectId)
                .ForeignKey("dbo.User", t => t.CreatedBy)
                .Index(t => t.CreatedBy);
            
            CreateTable(
                "dbo.Quizs",
                c => new
                    {
                        QuizId = c.Int(nullable: false, identity: true),
                        Difficulty = c.String(),
                        TotalQuestions = c.Int(nullable: false),
                        TotalMarks = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ArchiveStatus = c.Boolean(nullable: false),
                        QuizType = c.String(),
                        SubjectId = c.Int(nullable: false),
                        CreatedBy = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.QuizId)
                .ForeignKey("dbo.Subjects", t => t.SubjectId, cascadeDelete: false)
                .ForeignKey("dbo.User", t => t.CreatedBy)
                .Index(t => t.SubjectId)
                .Index(t => t.CreatedBy);
            
            CreateTable(
                "dbo.QuizSchedules",
                c => new
                    {
                        ScheduleId = c.Int(nullable: false, identity: true),
                        StartDateTime = c.DateTime(nullable: false),
                        EndDateTime = c.DateTime(nullable: false),
                        ArchiveStatus = c.Boolean(nullable: false),
                        UserId = c.String(maxLength: 128),
                        QuizId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ScheduleId)
                .ForeignKey("dbo.Quizs", t => t.QuizId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.QuizId);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Role = c.String(),
                        ImageURL = c.String(),
                        GoogleId = c.String(),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.UserClaim",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.UserLogin",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.UserRole",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.User", t => t.UserId, cascadeDelete: true)
                .ForeignKey("dbo.Role", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.Reports",
                c => new
                    {
                        ReportId = c.Int(nullable: false, identity: true),
                        CorrectAnswers = c.Int(nullable: false),
                        WrongAnswers = c.Int(nullable: false),
                        TimeTaken = c.Decimal(nullable: false, precision: 18, scale: 2),
                        UnattemptedAnswers = c.Int(nullable: false),
                        Accuracy = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Efficiency = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TotalMarks = c.Decimal(nullable: false, precision: 18, scale: 2),
                        QuizType = c.String(),
                        UserId = c.String(maxLength: 128),
                        QuizId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ReportId)
                .ForeignKey("dbo.Quizs", t => t.QuizId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.QuizId);
            
            CreateTable(
                "dbo.Role",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserRole", "RoleId", "dbo.Role");
            DropForeignKey("dbo.DetailedReports", "UserId", "dbo.User");
            DropForeignKey("dbo.DetailedReports", "QuizId", "dbo.Quizs");
            DropForeignKey("dbo.DetailedReports", "QuestionId", "dbo.Questions");
            DropForeignKey("dbo.Questions", "CreatedBy", "dbo.User");
            DropForeignKey("dbo.Questions", "SubjectId", "dbo.Subjects");
            DropForeignKey("dbo.Subjects", "CreatedBy", "dbo.User");
            DropForeignKey("dbo.Quizs", "CreatedBy", "dbo.User");
            DropForeignKey("dbo.Quizs", "SubjectId", "dbo.Subjects");
            DropForeignKey("dbo.Reports", "UserId", "dbo.User");
            DropForeignKey("dbo.Reports", "QuizId", "dbo.Quizs");
            DropForeignKey("dbo.QuizSchedules", "UserId", "dbo.User");
            DropForeignKey("dbo.UserRole", "UserId", "dbo.User");
            DropForeignKey("dbo.UserLogin", "UserId", "dbo.User");
            DropForeignKey("dbo.UserClaim", "UserId", "dbo.User");
            DropForeignKey("dbo.QuizSchedules", "QuizId", "dbo.Quizs");
            DropIndex("dbo.Role", "RoleNameIndex");
            DropIndex("dbo.Reports", new[] { "QuizId" });
            DropIndex("dbo.Reports", new[] { "UserId" });
            DropIndex("dbo.UserRole", new[] { "RoleId" });
            DropIndex("dbo.UserRole", new[] { "UserId" });
            DropIndex("dbo.UserLogin", new[] { "UserId" });
            DropIndex("dbo.UserClaim", new[] { "UserId" });
            DropIndex("dbo.User", "UserNameIndex");
            DropIndex("dbo.QuizSchedules", new[] { "QuizId" });
            DropIndex("dbo.QuizSchedules", new[] { "UserId" });
            DropIndex("dbo.Quizs", new[] { "CreatedBy" });
            DropIndex("dbo.Quizs", new[] { "SubjectId" });
            DropIndex("dbo.Subjects", new[] { "CreatedBy" });
            DropIndex("dbo.Questions", new[] { "CreatedBy" });
            DropIndex("dbo.Questions", new[] { "SubjectId" });
            DropIndex("dbo.DetailedReports", new[] { "UserId" });
            DropIndex("dbo.DetailedReports", new[] { "QuestionId" });
            DropIndex("dbo.DetailedReports", new[] { "QuizId" });
            DropTable("dbo.Role");
            DropTable("dbo.Reports");
            DropTable("dbo.UserRole");
            DropTable("dbo.UserLogin");
            DropTable("dbo.UserClaim");
            DropTable("dbo.User");
            DropTable("dbo.QuizSchedules");
            DropTable("dbo.Quizs");
            DropTable("dbo.Subjects");
            DropTable("dbo.Questions");
            DropTable("dbo.DetailedReports");
        }
    }
}
