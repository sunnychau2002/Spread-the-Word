#include <iostream>
#include <string>

using namespace std;

int main() {

    string message = "Spread the Word!";
    cout << message << endl;

    bool life = true;
    while (life) {
        cout << "Share the message: " << message << endl;
    }

    bool enoughSharing = false;
    int shared = 0;
    while (shared < 2000) {
        shared++;
        cout << message + " - shared " + shared << endl;
        if (shared == 2000) {
            enoughSharing = true;
            cout << "Mission Accomplished!" << endl;
            break;
        }
    }

    bool realized = false;
    while (!realized) {
        string response;
        cout << "Do you realize the power of words? (Yes/No): " << endl;
        cin >> response;
        if (response == "Yes") {
            cout << "Yes! Spread the Word!" << endl;
            realized = true;
        } else if (response == "No") {
            cout << "Think about it more." << endl;
        } else {
            cout << "Please answer Yes or No." << endl;
        }
    }

    int count = 0;
    while (count < 5) {
        cout << "\"Spread the Word\"" << endl;
        count++;
    }

    string referrer;
    cout << "Who referred you to Spread the Word? (enter their name): " << endl;
    cin >> referrer;

    cout << "Thanks to " + referrer + " for helping to Spread the Word!" << endl;

    return 0;
}