import type { LocalizationResource } from "@clerk/types";

export const enUS: LocalizationResource = {
    signIn: {
        alternativeMethods: {
            actionLink: "Get help",
            blockButton__backupCode: "Use a backup code",
            blockButton__emailCode: "Email code to {{identifier}}",
            blockButton__emailLink: "Email link to {{identifier}}",
            blockButton__password: "Sign in with your password",
            blockButton__phoneCode: "Send SMS code to {{identifier}}",
            blockButton__totp: "Use your authenticator app",
            getHelp: {
                blockButton__emailSupport: "Email support",
                content:
                    "If you’re experiencing difficulty signing into your account, email us and we will work with you to restore access as soon as possible.",
                title: "Get help",
            },
            title: "Use another method",
        },
        backupCodeMfa: {
            subtitle:
                "Your backup code is the one you got when setting up two-step authentication.",
            title: "Enter a backup code",
        },
        emailCode: {
            formTitle: "Verification code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "to continue to {{applicationName}}",
            title: "Check your email",
        },
        emailLink: {
            expired: {
                subtitle: "Return to the original tab to continue.",
                title: "This verification link has expired",
            },
            failed: {
                subtitle: "Return to the original tab to continue.",
                title: "This verification link is invalid",
            },
            formSubtitle: "Use the verification link sent to your email",
            formTitle: "Verification link",
            loading: {
                subtitle: "You will be redirected soon",
                title: "Signing in...",
            },
            resendButton: "Didn't receive a link? Resend",
            subtitle: "to continue to {{applicationName}}",
            title: "Check your email",
            unusedTab: {
                title: "You may close this tab",
            },
            verified: {
                subtitle: "You will be redirected soon",
                title: "Successfully signed in",
            },
            verifiedSwitchTab: {
                subtitle: "Return to original tab to continue",
                subtitleNewTab: "Return to the newly opened tab to continue",
                titleNewTab: "Signed in on other tab",
            },
        },
        forgotPassword: {
            formTitle: "Reset password code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "to reset your password",
        },
        forgotPasswordAlternativeMethods: {
            blockButton__resetPassword: "Reset your password",
            label__alternativeMethods: "Or, sign in with another method",
            title: "Forgot Password?",
        },
        noAvailableMethods: {
            message: "Cannot proceed with sign in. There's no available authentication factor.",
            subtitle: "An error occurred",
            title: "Cannot sign in",
        },
        password: {
            actionLink: "Use another method",
            subtitle: "Enter the password associated with your account",
            title: "Enter your password",
        },
        passwordPwned: {
            title: "Password compromised",
        },
        phoneCode: {
            formTitle: "Verification code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "to continue to {{applicationName}}",
            title: "Check your phone",
        },
        phoneCodeMfa: {
            formTitle: "Verification code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "To continue, please enter the verification code sent to your phone",
            title: "Check your phone",
        },
        resetPassword: {
            formButtonPrimary: "Reset Password",
            requiredMessage: "For security reasons, it is required to reset your password.",
            successMessage:
                "Your password was successfully changed. Signing you in, please wait a moment.",
            title: "Set new password",
        },
        resetPasswordMfa: {
            detailsLabel: "We need to verify your identity before resetting your password.",
        },
        start: {
            actionLink: "Sign up",
            actionLink__use_email: "Use email",
            actionLink__use_email_username: "Use email or username",
            actionLink__use_phone: "Use phone",
            actionLink__use_username: "Use username",
            actionText: "Don’t have an account?",
            subtitle: "Welcome back! Please sign in to continue",
            title: "Sign in to {{applicationName}}",
        },
        totpMfa: {
            formTitle: "Verification code",
            subtitle:
                "To continue, please enter the verification code generated by your authenticator app",
            title: "Two-step verification",
        },
    },
    signUp: {
        continue: {
            actionLink: "Sign in",
            actionText: "Already have an account?",
            subtitle: "Please fill in the remaining details to continue.",
            title: "Fill in missing fields",
        },
        emailCode: {
            formSubtitle: "Enter the verification code sent to your email address",
            formTitle: "Verification code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "Enter the verification code sent to your email",
            title: "Verify your email",
        },
        emailLink: {
            formSubtitle: "Use the verification link sent to your email address",
            formTitle: "Verification link",
            loading: {
                title: "Signing up...",
            },
            resendButton: "Didn't receive a link? Resend",
            subtitle: "to continue to {{applicationName}}",
            title: "Verify your email",
            verified: {
                title: "Successfully signed up",
            },
            verifiedSwitchTab: {
                subtitle: "Return to the newly opened tab to continue",
                subtitleNewTab: "Return to previous tab to continue",
                title: "Successfully verified email",
            },
        },
        phoneCode: {
            formSubtitle: "Enter the verification code sent to your phone number",
            formTitle: "Verification code",
            resendButton: "Didn't receive a code? Resend",
            subtitle: "Enter the verification code sent to your phone",
            title: "Verify your phone",
        },
        start: {
            actionLink: "Sign in",
            actionText: "Already have an account?",
            subtitle: "Welcome! Please fill in the details to get started.",
            title: "Create your account",
        },
    },
} as const;
