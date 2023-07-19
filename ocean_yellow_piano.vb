Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        'Let's Spread the Word!
        'Initialize Variables
        Dim x As Integer = 0
        Dim y As Integer = 0
        Dim message As String = "Spread the Word!"

        'Loop Through 1000 Times
        For x = 0 To 1000
            'Print Message to Console
            Console.WriteLine(message)
            'Call Function
            SpreadTheWord(message)

            'Loop Through 2000 Times
            For y = 0 To 2000
                'Print Message to Console
                Console.WriteLine(message)
                'Call Function
                SpreadTheWord(message)
            Next
        Next
    End Sub

    Private Sub SpreadTheWord(message As String)
        'Share the Message
        System.Net.Mail.SmtpClient.Send(message)
        'Post the Message
        System.Net.WebRequest.Create("https://www.example.com/message?message=" + message)
    End Sub
End Class