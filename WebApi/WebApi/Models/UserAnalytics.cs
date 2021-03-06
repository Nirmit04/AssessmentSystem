﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class UserAnalytics
    {
        public int MockCount { get; set; }
        public int ScheduledCount { get; set; }
        public int TotalQuizCount { get; set; }
        public decimal HighestScore { get; set; }
        public decimal LowestScore { get; set; }
        public decimal Performance { get; set; }
        public decimal Accuracy { get; set; }
        public decimal AverageScore { get; set; }
        public decimal ProbabilityAnsweringCorrectly { get; set; }
    }
}