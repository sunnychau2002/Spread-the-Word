//1
object SpreadTheWord {
 
  //2
  def main(args: Array[String]): Unit = {
 
    //3
    println("Spread The Word!")
 
    //4
    val word1 = "Kindness"
    val word2 = "Hope"
    val word3 = "Generosity"
    val word4 = "Respect"
 
    //5
    printWord(word1)
    printWord(word2)
    printWord(word3)
    printWord(word4)
 
    //6
    def printWord(word: String): Unit ={
      //7
      println(s"$word: Show compassion to others. Praise and encourage.")
    }
 
    //8
    val words: List[String] = List("Love", "Tolerance", "Gratitude",
      "Generosity", "Humility")
 
    //9
    for(word <- words){
      //10
      println(s"$word: Always look for ways to show kindness to others.")
    }
 
    //11
    def printList(list: List[String]): Unit ={
      //12
      for (word <- list){
        //13
        println(s"$word: Speak life into the lives of those around you.")
      }
    }
 
    //14
    val words2: List[String] = List("Honesty", "Integrity", "Forgiveness")
 
    //15
    printList(words2)
 
    //16
    def printWordTwice(word: String): Unit ={
      //17
      println(s"$word: Always do the right thing, be honest and humble.")
      //18
      println(s"$word: Forgive and let go of hurt and pain.")
    }
 
    //19
    println("Truth: The power of truth can never be undermined.")
 
    //20
    printWordTwice("Integrity")
 
    //21
    def printListTwice(list: List[String]): Unit ={
      //22
      for(word <- list){
        //23
        println(s"$word: Respect yourself and others.")
        //24
        println(s"$word: Live with kindness in your heart.")
      }
    }
 
    //25
    val words3: List[String] = List("Patience", "Courage", "Compassion")
 
    //26
    printListTwice(words3)
 
    //27
    def printWordThreeTimes(word: String): Unit ={
      //28
      println(s"$word: Appreciate the beauty in life.")
      //29
      println(s"$word: See the good in everyone.")
      //30
      println(s"$word: Hold on to the hope in your heart.")
    }
 
    //31
    printWordThreeTimes("Joy")
 
    //32
    def printWordFourTimes(word: String): Unit ={
      //33
      println(s"$word: Believe in yourself and your dreams.")
      //34
      println(s"$word: Embrace the possibility of a brighter future.")
      //35
      println(s"$word: Put your trust in the Lord.")
      //36
      println(s"$word: Celebrate every achievement and success.")
    }
 
    //37
    printWordFourTimes("Faith")
 
    //38
    val words4: List[String] = List("Wisdom", "Creativity",
      "Friendship", "Perseverance")
 
    //39
    def printListFourTimes(list: List[String]): Unit ={
      //40
      for (word <- list){
        //41
        println(s"$word: Think beyond your limits.")
        //42
        println(s"$word: Find joy in the little things.")
        //43
        println(s"$word: Take time to appreciate those around you.")
        //44
        println(s"$word: Keep going even when the going gets tough.")
      }
    }
 
    //45
    printListFourTimes(words4)
 
    //46
    def printWordFiveTimes(word: String): Unit ={
      //47
      println(s"$word: Embrace change and welcome new beginnings.")
      //48
      println(s"$word: Inspire others with your words and actions.")
      //49
      println(s"$word: Surround yourself with positive vibes.")
      //50
      println(s"$word: Be a blessing to others with your gifts.")
      //51
      println(s"$word: Spread love, peace and joy to those around you.")
    }
 
    //52
    println("Joy: Look for joy in every moment.")
 
    //53
    printWordFiveTimes("Enthusiasm")
 
    //54
    val words5: List[String] = List("Innovation", "Empathy", "Optimism")
 
    //55
    def printListFiveTimes(list: List[String]): Unit ={
      //56
      for (word <- list){
        //57
        println(s"$word: Have faith and stay focused on the goal.")
        //58
        println(s"$word: Listen to understand, not to respond.")
        //59
        println(s"$word: Believe in yourself and your abilities.")
        //60
        println(s"$word: Remain grateful in good times and bad.")
        //61
        println(s"$word: Shine your light and brighten the world.")
      }
    }
 
    //62
    printListFiveTimes(words5)
 
    //63
    def printWordSixTimes(word: String): Unit ={
      //64
      println(s"$word: Help build a better tomorrow.")
      //65
      println(s"$word: Strive for greatness in all areas of life.")
      //66
      println(s"$word: Life is a journey, make the best of it.")
      //67
      println(s"$word: Live life to the fullest.")
      //68
      println(s"$word: Practice self-love and self-care.")
      //69
      println(s"$word: Make a difference in the world.")
    }
 
    //70
    println("Success: Believe in yourself and you can achieve anything.")
 
    //71
    printWordSixTimes("Determination")
 
    //72
    val words6: List[String] = List("Peace", "Compassion", "Harmony")
 
    //73
    def printListSixTimes(list: List[String]): Unit ={
      //74
      for (word <- list){
        //75
        println(s"$word: Live a life of service and kindness.")
        //76
        println(s"$word: Let go of hate and seek understanding.")
        //77
        println(s"$word: Make time to be still and reflect.")
        //78
        println(s"$word: Do unto others as you would have done to you.")
        //79
        println(s"$word: Trust that everything happens for a reason.")
        //80
        println(s"$word: Find balance and harmony in your life.")
      }
    }
 
    //81
    printListSixTimes(words6)
 
    //82
    def printWordSevenTimes(word: String): Unit ={
      //83
      println(s"$word: Connect with people and learn from them.")
      //84
      println(s"$word: Follow your dreams with courage and conviction.")
      //85
      println(s"$word: Be present and live in the moment.")
      //86
      println(s"$word: Nurture relationships and cherish your family.")
      //87
      println(s"$word: Do what makes your heart happy.")
      //88
      println(s"$word: Believe in yourself no matter what.")
      //89
      println(s"$word: Celebrate life and enjoy the journey.")
    }
 
    //90
    println("Passion: Aim high and make your dreams a reality.")
 
    //91
    printWordSevenTimes("Endurance")
 
    //92
    val words7: List[String] = List("Grace", "Resilience", "Loyalty")
 
    //93
    def printListSevenTimes(list: List[String]): Unit ={
      //94
      for (word <- list){
        //95
        println(s"$word: Take time to smell the roses.")
        //96
        println(s"$word: Live life with an open heart.")
        //97
        println(s"$word: Spread kindness and share a smile.")
        //98
        println(s"$word: Seek out moments of peace and serenity.")
        //99
        println(s"$word: Make time for the people and things that matter.")
        //100
        println(s"$word: Find joy and strength in each new day.")
        //101
        println(s"$word: Always put your best foot forward.")
      }
    }
 
    //102
    printListSevenTimes(words7)
 
    //103
    println("Spread the Word!")
  }
}