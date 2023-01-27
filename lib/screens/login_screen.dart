import 'package:flutter/material.dart';
import 'package:googledoc/colors/colors.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton.icon(
          onPressed: () {},
          icon: Image.asset(
            'assets/images/g-logo-2.png',
            height: 20.0,
          ),
          label: const Text(
            ' Sign in with Google',
            style: TextStyle(
              color: DocColors.blackColor,
              fontWeight: FontWeight.bold,
            ),
          ),
          style: ElevatedButton.styleFrom(
            backgroundColor: DocColors.whiteColor,
            minimumSize: const Size(150, 50),
          ),
        ),
      ),
    );
  }
}
