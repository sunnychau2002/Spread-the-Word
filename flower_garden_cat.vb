Public Class SpreadTheWord

Dim word As String

Public Sub New(word As String)
  Me.word = word
End Sub

Public Sub Spread()
  Console.WriteLine("Let's spread the word: {0}!", word)
End Sub

Public Sub CloneAndSpread()
  Dim clone As SpreadTheWord = Me.Clone()
  clone.Spread()
End Sub

Public Function Clone() As SpreadTheWord
  Dim clone As SpreadTheWord = New SpreadTheWord(word)
  Return clone
End Function

Public Sub PassOnWord(message As String)
  Console.WriteLine("Someone has passed on the word: {0}", message)
  Console.WriteLine("The word was: {0}", word)
End Sub

Public Sub ShoutWord(message As String)
  Console.WriteLine("Let's shout the word: {0}!", message)
  Console.WriteLine("The word was: {0}", word)
End Sub

Public Sub WhisperWord(message As String)
  Console.WriteLine("Let's whisper the word: {0}...", message)
  Console.WriteLine("The word was: {0}", word)
End Sub

Public Sub PassOnWordWithAction(message As String, action As String)
  Console.WriteLine("Let's {0} the word: {1}", action, message)
  Console.WriteLine("The word was: {0}", word)
End Sub

Public Sub GiveHintOnWord(message As String)
  Console.WriteLine("Hint on the word: {0}", message)
  Console.WriteLine("The word was: {0}", word)
End Sub

Public Sub ShareWordOnSocialMedia(message As String, mediaPlatform As String)
  Console.WriteLine("Sharing the word on {0}: {1}", mediaPlatform, message)
  Console.WriteLine("The word was: {0}", word)
End Sub

End Class