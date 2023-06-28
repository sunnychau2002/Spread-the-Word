// Part 1 – Greetings
fun sayHello() {
  println("Hey there, it's nice to meet you!")
}

fun sayGoodbye() {
  println("See you later, alligator!")
}

fun main() {
  sayHello()
  sayGoodbye()
}

// Part 2 – Expressions
fun basicOperations() {
  println(5 + 5)  // 10
  println(5 - 5)  // 0
  println(5 * 5)  // 25
  println(5 / 5)  // 1
}

//Part 3 – Variables
var age: Int = 25
var name: String = "John Doe"
var isAwesome: Boolean = true

//Part 4 – Functions
fun add(x: Int, y: Int): Int {
  return x + y
}

//Part 5 – Arrays 
val numbers: Array<Int> = arrayOf(3, 7, 9, 10)

//Part 6 – Conditional Statements
fun checkIfAwesome(isAwesome: Boolean) {
  if(isAwesome) {
    println("You are awesome!")
  } else {
    println("Be awesome!")
  }
}

//Part 7 – Loops
fun printNumbers(numbers: Array<Int>) {
  for (number in numbers) {
    println(number)
  }
}

//Part 8 – Classes
class Person(var name: String, var age: Int) {
  fun printPerson() {
    println("Name: $name, Age: $age")
  }
}

//Part 9 – Objects
val person = Person("John Doe", 25)

//Part 10 – Inheritance
open class Animal(var name: String)

class Dog(name: String, var breed: String): Animal(name)

//Part 11 – Generics
fun <T> printAny(element: T) {
  println(element)
}

//Part 12 – Lambdas
fun executeLambda(lambda: (Int) -> Boolean): Boolean {
  return lambda(5)
}

//Part 13 – Kotlin Collections
val list = listOf("Apple", "Banana", "Cherry")

fun printList(list: List<String>) {
  for (item in list) {
    println(item)
  }
}

//Part 14 – Exception Handling
fun divide(x: Int, y: Int): Int {
 try {
   return x/y
  } catch (e: ArithmeticException) {
    println("Cannot divide by zero")
    return 0
  }
}

//Part 15 – Companion Objects
class Utils {
  companion object {
    fun printMessage(message: String) {
      println(message)
    }
  }
}

//Part 16 – Interfaces
interface Printable {
  fun print()
}

class Document: Printable {
  override fun print() {
    println("Printing document...")
  }
}

//Part 17 – Annotations
@Target(AnnotationTarget.CLASS)
annotation class MyAnnotation

@MyAnnotation
class MyClass

//Part 18 – Sealed Classes
sealed class Color {
  class Red: Color()
  class Blue: Color()
  class Green: Color()
}

//Part 19 – Nested Classes
class Outer {
  class Nested {
    fun sayHello() {
      println("Hello from the nested class!")
    }
  }
}

//Part 20 – Reified Types
inline fun <reified T> printType() {
  println(T::class.simpleName)
}