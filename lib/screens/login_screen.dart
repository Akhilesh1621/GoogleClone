import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:googledoc/auth/repository/auth_repository.dart';
import 'package:googledoc/colors/colors.dart';

class LoginScreen extends ConsumerWidget {
  const LoginScreen({super.key});

  void signInWithGoogle(WidgetRef ref) {
    ref.read(authRepositoryProvider).signInWithGoogle();
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Center(
        child: ElevatedButton.icon(
          onPressed: () => signInWithGoogle(ref),
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
