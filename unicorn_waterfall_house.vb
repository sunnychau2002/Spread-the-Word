Public Class Form1
    Dim outputText As String

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        outputText = "Spread the Word!"
    End Sub


    Private Sub btnWrite_Click(sender As Object, e As EventArgs) Handles btnWrite.Click
        Dim count As Integer
        Dim x As Integer
        Dim text As String
        Dim fileName As String
        Dim outputFile As System.IO.StreamWriter

        fileName = txtFile.Text
        outputFile = My.Computer.FileSystem.OpenTextFileWriter(fileName, False)

        For count = 1 To 2000
            text = outputText & " (" & count & ")"
            outputFile.WriteLine(text)
            x += 1
        Next
        outputFile.Close()
    End Sub

    Private Sub btnRead_Click(sender As Object, e As EventArgs) Handles btnRead.Click
        Dim outputReader As System.IO.StreamReader
        Dim line As String
        Dim count As Integer

        outputReader = My.Computer.FileSystem.OpenTextFileReader(txtFile.Text)
        line = outputReader.ReadLine
        While Not line Is Nothing
            lstOutput.Items.Add(line)
            count += 1
            line = outputReader.ReadLine
        End While
        outputReader.Close()
    End Sub

End Class