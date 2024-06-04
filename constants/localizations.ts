import type { LocalizationResource } from "@clerk/types";

export const slSI: LocalizationResource = {
    locale: "sl-SI",
    backButton: "Nazaj",
    badge__default: "Privzeto",
    badge__otherImpersonatorDevice: "Druga naprava posnemovalca",
    badge__primary: "Primarno",
    badge__requiresAction: "Zahteva ukrepanje",
    badge__thisDevice: "Ta naprava",
    badge__unverified: "Nepreverjeno",
    badge__userDevice: "Uporabniška naprava",
    badge__you: "Vi",
    createOrganization: {
        formButtonSubmit: "Ustvari organizacijo",
        invitePage: {
            formButtonReset: "Preskoči",
        },
        title: "Ustvari organizacijo",
    },
    dates: {
        lastDay: "Včeraj ob {{ date | timeString('sl-SI') }}",
        next6Days: "{{ date | weekday('sl-SI','long') }} ob {{ date | timeString('sl-SI') }}",
        nextDay: "Jutri ob {{ date | timeString('sl-SI') }}",
        numeric: "{{ date | numeric('sl-SI') }}",
        previous6Days:
            "Zadnji {{ date | weekday('sl-SI','long') }} ob {{ date | timeString('sl-SI') }}",
        sameDay: "Danes ob {{ date | timeString('sl-SI') }}",
    },
    dividerText: "ali",
    footerActionLink__useAnotherMethod: "Uporabi drugo metodo",
    footerPageLink__help: "Pomoč",
    footerPageLink__privacy: "Zasebnost",
    footerPageLink__terms: "Pogoji",
    formButtonPrimary: "Nadaljuj",
    formFieldAction__forgotPassword: "Ste pozabili geslo?",
    formFieldError__matchingPasswords: "Gesli se ujemata.",
    formFieldError__notMatchingPasswords: "Gesli se ne ujemata.",
    formFieldError__verificationLinkExpired:
        "Povezava za preverjanje je potekla. Prosim, zahtevajte novo povezavo.",
    formFieldHintText__optional: "Neobvezno",
    formFieldHintText__slug:
        "Slag je človeku berljiva ID, ki mora biti edinstvena. Pogosto se uporablja v URL-jih.",
    formFieldInputPlaceholder__backupCode: "",
    formFieldInputPlaceholder__emailAddress: "",
    formFieldInputPlaceholder__emailAddress_username: "",
    formFieldInputPlaceholder__emailAddresses: "primer@email.com, primer2@email.com",
    formFieldInputPlaceholder__firstName: "",
    formFieldInputPlaceholder__lastName: "",
    formFieldInputPlaceholder__organizationDomain: "",
    formFieldInputPlaceholder__organizationDomainEmailAddress: "",
    formFieldInputPlaceholder__organizationName: "",
    formFieldInputPlaceholder__organizationSlug: "moja-org",
    formFieldInputPlaceholder__password: "",
    formFieldInputPlaceholder__phoneNumber: "",
    formFieldInputPlaceholder__username: "",
    formFieldLabel__automaticInvitations: "Omogoči samodejna povabila za to domeno",
    formFieldLabel__backupCode: "Rezervna koda",
    formFieldLabel__confirmDeletion: "Potrditev",
    formFieldLabel__confirmPassword: "Potrdite geslo",
    formFieldLabel__currentPassword: "Trenutno geslo",
    formFieldLabel__emailAddress: "E-poštni naslov",
    formFieldLabel__emailAddress_username: "E-poštni naslov ali uporabniško ime",
    formFieldLabel__emailAddresses: "E-poštni naslovi",
    formFieldLabel__firstName: "Ime",
    formFieldLabel__lastName: "Priimek",
    formFieldLabel__newPassword: "Novo geslo",
    formFieldLabel__organizationDomain: "Domena",
    formFieldLabel__organizationDomainDeletePending: "Izbriši čakajoča povabila in predloge",
    formFieldLabel__organizationDomainEmailAddress: "E-poštni naslov za preverjanje",
    formFieldLabel__organizationDomainEmailAddressDescription:
        "Vnesite e-poštni naslov pod to domeno za prejem kode in preverjanje domene.",
    formFieldLabel__organizationName: "Ime",
    formFieldLabel__organizationSlug: "Slag",
    formFieldLabel__password: "Geslo",
    formFieldLabel__phoneNumber: "Telefonska številka",
    formFieldLabel__role: "Vloga",
    formFieldLabel__signOutOfOtherSessions: "Odjava iz vseh drugih naprav",
    formFieldLabel__username: "Uporabniško ime",
    impersonationFab: {
        action__signOut: "Odjava",
        title: "Prijavljen kot {{identifier}}",
    },
    maintenanceMode:
        "Trenutno izvajamo vzdrževanje, vendar ne skrbite, to ne bi smelo trajati več kot nekaj minut.",
    membershipRole__admin: "Admin",
    membershipRole__basicMember: "Član",
    membershipRole__guestMember: "Gost",
    organizationList: {
        action__createOrganization: "Ustvari organizacijo",
        action__invitationAccept: "Pridruži se",
        action__suggestionsAccept: "Zahtevaj pridružitev",
        createOrganization: "Ustvari organizacijo",
        invitationAcceptedLabel: "Pridružen",
        subtitle: "za nadaljevanje do {{applicationName}}",
        suggestionsAcceptedLabel: "Čaka na odobritev",
        title: "Izberite račun",
        titleWithoutPersonal: "Izberite organizacijo",
    },
    organizationProfile: {
        badge__automaticInvitation: "Samodejna povabila",
        badge__automaticSuggestion: "Samodejni predlogi",
        badge__manualInvitation: "Brez samodejne prijave",
        badge__unverified: "Nepreverjeno",
        createDomainPage: {
            subtitle:
                "Dodajte domeno za preverjanje. Uporabniki z e-poštnimi naslovi v tej domeni se lahko samodejno pridružijo organizaciji ali zahtevajo pridružitev.",
            title: "Dodaj domeno",
        },
        invitePage: {
            detailsTitle__inviteFailed:
                "Povabil ni bilo mogoče poslati. Že obstajajo čakajoča povabila za naslednje e-poštne naslove: {{email_addresses}}.",
            formButtonPrimary__continue: "Pošlji povabila",
            subtitle:
                "Vnesite ali prilepite enega ali več e-poštnih naslovov, ločenih s presledki ali vejicami.",
            successMessage: "Povabila so bila uspešno poslana",
            title: "Povabi nove člane",
        },
        membersPage: {
            action__invite: "Povabi",
            activeMembersTab: {
                menuAction__remove: "Odstrani člana",
                tableHeader__actions: "",
                tableHeader__joined: "Pridružen",
                tableHeader__role: "Vloga",
                tableHeader__user: "Uporabnik",
            },
            detailsTitle__emptyRow: "Ni članov za prikaz",
            invitationsTab: {
                autoInvitations: {
                    headerSubtitle:
                        "Povabite uporabnike z dodajanjem e-poštne domene v vašo organizacijo. Kdorkoli se prijavi z ustrezno e-poštno domeno, se lahko kadarkoli pridruži organizaciji.",
                    headerTitle: "Samodejna povabila",
                    primaryButton: "Upravljanje preverjenih domen",
                },
                table__emptyRow: "Ni povabil za prikaz",
            },
            invitedMembersTab: {
                menuAction__revoke: "Prekliči povabilo",
                tableHeader__invited: "Povabljen",
            },
            requestsTab: {
                autoSuggestions: {
                    headerSubtitle:
                        "Uporabniki, ki se prijavijo z ustrezno e-poštno domeno, bodo videli predlog za zahtevo za pridružitev vaši organizaciji.",
                    headerTitle: "Samodejni predlogi",
                    primaryButton: "Upravljanje preverjenih domen",
                },
                menuAction__approve: "Odobri",
                menuAction__reject: "Zavrni",
                tableHeader__requested: "Zahtevana dostop",
                table__emptyRow: "Ni zahtev za prikaz",
            },
            start: {
                headerTitle__invitations: "Povabila",
                headerTitle__members: "Člani",
                headerTitle__requests: "Zahteve",
            },
        },
        profilePage: {
            dangerSection: {
                deleteOrganization: {
                    actionDescription: 'Vnesite "{{organizationName}}" spodaj za nadaljevanje.',
                    messageLine1: "Ali ste prepričani, da želite izbrisati to organizacijo?",
                    messageLine2: "Ta dejanje je trajno in nepopravljivo.",
                    successMessage: "Organizacija je bila izbrisana.",
                    title: "Izbriši organizacijo",
                },
                leaveOrganization: {
                    actionDescription: 'Vnesite "{{organizationName}}" spodaj za nadaljevanje.',
                    messageLine1:
                        "Ali ste prepričani, da želite zapustiti to organizacijo? Izgubili boste dostop do te organizacije in njenih aplikacij.",
                    messageLine2: "Ta dejanje je trajno in nepopravljivo.",
                    successMessage: "Zapustili ste organizacijo.",
                    title: "Zapusti organizacijo",
                },
                title: "Nevarno",
            },
            domainSection: {
                primaryButton: "Dodaj domeno",
                subtitle:
                    "Dovolite uporabnikom, da se samodejno pridružijo organizaciji ali zahtevajo pridružitev na podlagi preverjene e-poštne domene.",
                title: "Preverjene domene",
            },
            successMessage: "Organizacija je bila posodobljena.",
            title: "Posodobi profil",
        },
        removeDomainPage: {
            messageLine1: "E-poštna domena {{domain}} bo odstranjena.",
            messageLine2: "Uporabniki se po tem ne bodo mogli samodejno pridružiti organizaciji.",
            successMessage: "{{domain}} je bila odstranjena.",
            title: "Odstrani domeno",
        },
        start: {
            headerTitle__settings: "Splošno",
            headerTitle__members: "Člani",
        },
        verifiedDomainPage: {
            dangerTab: {
                calloutInfoLabel: "Odstranitev te domene bo vplivala na povabljene uporabnike.",
                removeDomainActionLabel__remove: "Odstrani domeno",
                removeDomainSubtitle: "Odstranite to domeno iz vaših preverjenih domen",
                removeDomainTitle: "Odstrani domeno",
            },
            enrollmentTab: {
                automaticInvitationOption__description:
                    "Uporabniki so samodejno povabljeni v organizacijo ob prijavi in se lahko kadarkoli pridružijo.",
                automaticInvitationOption__label: "Samodejna povabila",
                automaticSuggestionOption__description:
                    "Uporabniki prejmejo predlog za zahtevo za pridružitev, vendar jih mora odobriti admin, preden se lahko pridružijo organizaciji.",
                automaticSuggestionOption__label: "Samodejni predlogi",
                calloutInfoLabel: "Spreminjanje načina vpisa bo vplivalo samo na nove uporabnike.",
                calloutInvitationCountLabel: "Čakajoča povabila poslana uporabnikom: {{count}}",
                calloutSuggestionCountLabel: "Čakajoči predlogi poslani uporabnikom: {{count}}",
                manualInvitationOption__description:
                    "Uporabniki se lahko organizaciji pridružijo samo ročno z vabilom.",
                manualInvitationOption__label: "Brez samodejnega vpisa",
                subtitle: "Izberite, kako se lahko uporabniki te domene pridružijo organizaciji.",
            },
            start: {
                headerTitle__danger: "Nevarno",
                headerTitle__enrollment: "Možnosti vpisa",
            },
            subtitle: "Domena {{domain}} je zdaj preverjena. Nadaljujte z izbiro načina vpisa.",
        },
        verifyDomainPage: {
            formSubtitle: "Vnesite kodo za preverjanje, poslano na vaš e-poštni naslov",
            formTitle: "Koda za preverjanje",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "Domeno {{domainName}} je potrebno preveriti preko e-pošte.",
            subtitleVerificationCodeScreen:
                "Koda za preverjanje je bila poslana na {{emailAddress}}. Vnesite kodo za nadaljevanje.",
            title: "Preveri domeno",
        },
    },
    organizationSwitcher: {
        action__createOrganization: "Ustvari organizacijo",
        action__invitationAccept: "Pridruži se",
        action__manageOrganization: "Upravljaj",
        action__suggestionsAccept: "Zahtevaj pridružitev",
        notSelected: "Nobena organizacija ni izbrana",
        personalWorkspace: "Osebni račun",
        suggestionsAcceptedLabel: "Čaka na odobritev",
    },
    paginationButton__next: "Naslednji",
    paginationButton__previous: "Prejšnji",
    paginationRowText__displaying: "Prikazujem",
    paginationRowText__of: "od",
    signIn: {
        alternativeMethods: {
            actionLink: "Pridobi pomoč",
            blockButton__backupCode: "Uporabi rezervno kodo",
            blockButton__emailCode: "Pošlji kodo na {{identifier}}",
            blockButton__emailLink: "Pošlji povezavo na {{identifier}}",
            blockButton__password: "Prijavite se z geslom",
            blockButton__phoneCode: "Pošlji SMS kodo na {{identifier}}",
            blockButton__totp: "Uporabi svojo overitveno aplikacijo",
            getHelp: {
                blockButton__emailSupport: "Podpora po e-pošti",
                content:
                    "Če imate težave pri prijavi v svoj račun, nam pošljite e-pošto in pomagali vam bomo čim prej obnoviti dostop.",
                title: "Pridobi pomoč",
            },
            title: "Uporabi drugo metodo",
        },
        backupCodeMfa: {
            subtitle:
                "Vaša rezervna koda je tista, ki ste jo prejeli ob nastavitvi dvofaktorske avtentikacije.",
            title: "Vnesite rezervno kodo",
        },
        emailCode: {
            formTitle: "Overitvena koda",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "za nadaljevanje do {{applicationName}}",
            title: "Preverite svojo e-pošto",
        },
        emailLink: {
            expired: {
                subtitle: "Vrni se na originalni zavihek za nadaljevanje.",
                title: "Ta overitvena povezava je potekla",
            },
            failed: {
                subtitle: "Vrni se na originalni zavihek za nadaljevanje.",
                title: "Ta overitvena povezava je neveljavna",
            },
            formSubtitle: "Uporabite overitveno povezavo, poslano na vašo e-pošto",
            formTitle: "Overitvena povezava",
            loading: {
                subtitle: "Kmalu boste preusmerjeni",
                title: "Prijava...",
            },
            resendButton: "Niste prejeli povezave? Ponovno pošlji",
            subtitle: "za nadaljevanje do {{applicationName}}",
            title: "Preverite svojo e-pošto",
            unusedTab: {
                title: "Ta zavihek lahko zaprete",
            },
            verified: {
                subtitle: "Kmalu boste preusmerjeni",
                title: "Uspešno prijavljeni",
            },
            verifiedSwitchTab: {
                subtitle: "Vrni se na originalni zavihek za nadaljevanje",
                subtitleNewTab: "Vrni se na novo odprt zavihek za nadaljevanje",
                titleNewTab: "Prijavljeni na drugem zavihku",
            },
        },
        forgotPassword: {
            formTitle: "Koda za ponastavitev gesla",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "za ponastavitev vašega gesla",
            formSubtitle_email: "Najprej vnesite kodo, poslano na vaš e-poštni naslov",
            formSubtitle_phone: "Najprej vnesite kodo, poslano na vašo telefonsko številko",
        },
        forgotPasswordAlternativeMethods: {
            blockButton__resetPassword: "Ponastavite geslo",
            label__alternativeMethods: "Ali, prijavite se z drugo metodo",
            title: "Pozabljeno geslo?",
        },
        noAvailableMethods: {
            message:
                "Ni mogoče nadaljevati s prijavo. Ni na voljo nobenega avtentifikacijskega faktorja.",
            subtitle: "Prišlo je do napake",
            title: "Ni mogoče prijaviti",
        },
        password: {
            actionLink: "Uporabi drugo metodo",
            subtitle: "Vnesite geslo, povezano z vašim računom",
            title: "Vnesite svoje geslo",
        },
        passwordPwned: {
            title: "Geslo je ogroženo",
        },
        phoneCode: {
            formTitle: "Overitvena koda",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "za nadaljevanje do {{applicationName}}",
            title: "Preverite svoj telefon",
        },
        phoneCodeMfa: {
            formTitle: "Overitvena koda",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "Za nadaljevanje vnesite overitveno kodo, poslano na vaš telefon",
            title: "Preverite svoj telefon",
        },
        resetPassword: {
            formButtonPrimary: "Ponastavi geslo",
            requiredMessage: "Zaradi varnostnih razlogov je potrebno ponastaviti geslo.",
            successMessage:
                "Vaše geslo je bilo uspešno spremenjeno. Prijavljamo vas, prosimo počakajte trenutek.",
            title: "Nastavite novo geslo",
        },
        resetPasswordMfa: {
            detailsLabel: "Pred ponastavitvijo gesla moramo preveriti vašo identiteto.",
        },
        start: {
            actionLink: "Ustvarite račun",
            actionLink__use_email: "Uporabi e-pošto",
            actionLink__use_email_username: "Uporabite e-pošto ali uporabniško ime",
            actionLink__use_phone: "Uporabite telefon",
            actionLink__use_username: "Uporabite uporabniško ime",
            actionText: "Nimate računa?",
            subtitle: "Dobrodošli nazaj! Prosimo, prijavite se za nadaljevanje",
            title: "Prijavite se v Ana's Place",
        },
        totpMfa: {
            formTitle: "Overitvena koda",
            subtitle:
                "Za nadaljevanje vnesite overitveno kodo, ki jo ustvari vaša overitvena aplikacija",
            title: "Dvofazna overitev",
        },
    },
    signInEnterPasswordTitle: "Vnesite svoje geslo",
    signUp: {
        continue: {
            actionLink: "Prijavite se",
            actionText: "Že imate račun?",
            subtitle: "Prosimo, izpolnite preostale podrobnosti za nadaljevanje.",
            title: "Izpolnite manjkajoča polja",
        },
        emailCode: {
            formSubtitle: "Vnesite overitveno kodo, poslano na vaš e-poštni naslov",
            formTitle: "Overitvena koda",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "Vnesite overitveno kodo, poslano na vašo e-pošto",
            title: "Preverite svojo e-pošto",
        },
        emailLink: {
            formSubtitle: "Uporabite overitveno povezavo, poslano na vaš e-poštni naslov",
            formTitle: "Overitvena povezava",
            loading: {
                title: "Ustvarjanje računa...",
            },
            resendButton: "Niste prejeli povezave? Ponovno pošlji",
            subtitle: "za nadaljevanje do {{applicationName}}",
            title: "Preverite svojo e-pošto",
            verified: {
                title: "Uspešno ustvarjen račun",
            },
            verifiedSwitchTab: {
                subtitle: "Vrni se na novo odprt zavihek za nadaljevanje",
                subtitleNewTab: "Vrni se na prejšnji zavihek za nadaljevanje",
                title: "E-pošta uspešno preverjena",
            },
        },
        phoneCode: {
            formSubtitle: "Vnesite overitveno kodo, poslano na vašo telefonsko številko",
            formTitle: "Overitvena koda",
            resendButton: "Niste prejeli kode? Ponovno pošlji",
            subtitle: "Vnesite overitveno kodo, poslano na vašo telefonsko številko",
            title: "Preverite svoj telefon",
        },
        start: {
            actionLink: "Prijavite se",
            actionText: "Že imate račun?",
            subtitle: "Dobrodošli! Prosimo, izpolnite podrobnosti za začetek.",
            title: "Ustvarite svoj račun",
        },
    },
    socialButtonsBlockButton: "Nadaljujte z {{provider|titleize}}",
    unstable__errors: {
        captcha_invalid:
            "Registracija ni bila uspešna zaradi neuspešnih varnostnih preverjanj. Osvežite stran in poskusite znova ali se obrnite na podporo za pomoč.",
        captcha_unavailable:
            "Registracija ni bila uspešna zaradi neuspešne preverbe bota. Osvežite stran in poskusite znova ali se obrnite na podporo za pomoč.",
        form_code_incorrect: "",
        form_identifier_exists: "",
        form_identifier_exists__email_address:
            "Ta e-poštni naslov je že zaseden. Poskusite drugega.",
        form_identifier_exists__phone_number:
            "Ta telefonska številka je že zasedena. Poskusite drugo.",
        form_identifier_exists__username: "To uporabniško ime je že zasedeno. Poskusite drugega.",
        form_identifier_not_found: "",
        form_param_format_invalid: "",
        form_param_format_invalid__email_address:
            "E-poštni naslov mora biti veljaven e-poštni naslov.",
        form_param_format_invalid__phone_number:
            "Telefonska številka mora biti v veljavnem mednarodnem formatu",
        form_param_max_length_exceeded__first_name: "Ime ne sme presegati 256 znakov.",
        form_param_max_length_exceeded__last_name: "Priimek ne sme presegati 256 znakov.",
        form_param_max_length_exceeded__name: "Ime ne sme presegati 256 znakov.",
        form_param_nil: "",
        form_password_incorrect: "",
        form_password_length_too_short: "",
        form_password_not_strong_enough: "Vaše geslo ni dovolj močno.",
        form_password_pwned:
            "To geslo je bilo najdeno kot del vdora in ga ni mogoče uporabiti, poskusite drugo geslo.",
        form_password_pwned__sign_in:
            "To geslo je bilo najdeno kot del vdora in ga ni mogoče uporabiti, prosimo, ponastavite geslo.",
        form_password_size_in_bytes_exceeded:
            "Vaše geslo je preseglo največje število dovoljenih bajtov, prosimo, skrajšajte ga ali odstranite nekaj posebnih znakov.",
        form_password_validation_failed: "Napačno geslo",
        form_username_invalid_character: "",
        form_username_invalid_length: "",
        identification_deletion_failed: "Ne morete izbrisati svoje zadnje identifikacije.",
        not_allowed_access: "",
        passwordComplexity: {
            maximumLength: "manj kot {{length}} znakov",
            minimumLength: "{{length}} ali več znakov",
            requireLowercase: "mala črka",
            requireNumbers: "številka",
            requireSpecialCharacter: "poseben znak",
            requireUppercase: "velika črka",
            sentencePrefix: "Vaše geslo mora vsebovati",
        },
        phone_number_exists: "Ta telefonska številka je že zasedena. Poskusite drugo.",
        zxcvbn: {
            couldBeStronger:
                "Vaše geslo je sprejemljivo, vendar bi lahko bilo močnejše. Poskusite dodati več znakov.",
            goodPassword: "Vaše geslo izpolnjuje vse potrebne zahteve.",
            notEnough: "Vaše geslo ni dovolj močno.",
            suggestions: {
                allUppercase: "Kapitalizirajte nekaj, vendar ne vseh črk.",
                anotherWord: "Dodajte več besed, ki so manj pogoste.",
                associatedYears: "Izogibajte se letom, ki so povezani z vami.",
                capitalization: "Kapitalizirajte več kot prvo črko.",
                dates: "Izogibajte se datumom in letom, ki so povezani z vami.",
                l33t: "Izogibajte se predvidljivim nadomestitvam črk, kot je '@' za 'a'.",
                longerKeyboardPattern:
                    "Uporabite daljše vzorce na tipkovnici in večkrat spremenite smer tipkanja.",
                noNeed: "Močna gesla lahko ustvarite brez uporabe simbolov, številk ali velikih črk.",
                pwned: "Če to geslo uporabljate drugje, ga spremenite.",
                recentYears: "Izogibajte se zadnjim letom.",
                repeated: "Izogibajte se ponavljajočim se besedam in znakom.",
                reverseWords: "Izogibajte se obrnjenim črkovanjem pogostih besed.",
                sequences: "Izogibajte se pogostim zaporedjem znakov.",
                useWords: "Uporabite več besed, vendar se izogibajte pogostim frazam.",
            },
            warnings: {
                common: "To je pogosto uporabljeno geslo.",
                commonNames: "Pogosta imena in priimki so lahko ugibana.",
                dates: "Datume je enostavno uganiti.",
                extendedRepeat:
                    'Ponavljajoči se vzorci znakov, kot je "abcabcabc", so enostavno ugibani.',
                keyPattern: "Kratki vzorci na tipkovnici so enostavno ugibani.",
                namesByThemselves: "Posamezna imena ali priimki so enostavno ugibani.",
                pwned: "Vaše geslo je bilo razkrito zaradi kršitve podatkov na internetu.",
                recentYears: "Zadnja leta so enostavno ugibana.",
                sequences: 'Pogosta zaporedja znakov, kot je "abc", so enostavno ugibana.',
                similarToCommon: "To je podobno pogosto uporabljenemu geslu.",
                simpleRepeat: 'Ponavljajoči se znaki, kot je "aaa", so enostavno ugibani.',
                straightRow: "Neprekinjene vrstice tipk na vaši tipkovnici so enostavno ugibane.",
                topHundred: "To je pogosto uporabljeno geslo.",
                topTen: "To je zelo pogosto uporabljeno geslo.",
                userInputs: "Geslo ne sme vsebovati nobenih osebnih ali strani povezanih podatkov.",
                wordByItself: "Posamezne besede so enostavno ugibane.",
            },
        },
    },
    userButton: {
        action__addAccount: "Dodaj račun",
        action__manageAccount: "Upravljaj račun",
        action__signOut: "Odjava",
        action__signOutAll: "Odjava iz vseh računov",
    },
    userProfile: {
        backupCodePage: {
            actionLabel__copied: "Kopirano!",
            actionLabel__copy: "Kopiraj vse",
            actionLabel__download: "Prenesi .txt",
            actionLabel__print: "Natisni",
            infoText1: "Rezervne kode bodo omogočene za ta račun.",
            infoText2:
                "Hranite rezervne kode na varnem in jih hranite zaupno. Lahko regenerirate rezervne kode, če sumite, da so bile kompromitirane.",
            subtitle__codelist: "Hranite jih na varnem in jih hranite zaupno.",
            successMessage:
                "Rezervne kode so zdaj omogočene. Uporabite eno od teh za prijavo v svoj račun, če izgubite dostop do svoje overitvene naprave. Vsaka koda se lahko uporabi samo enkrat.",
            successSubtitle:
                "Uporabite eno od teh za prijavo v svoj račun, če izgubite dostop do svoje overitvene naprave.",
            title: "Dodaj preverjanje z rezervno kodo",
            title__codelist: "Rezervne kode",
        },
        connectedAccountPage: {
            formHint: "Izberite ponudnika za povezavo vašega računa.",
            formHint__noAccounts: "Ni na voljo zunanjih ponudnikov računov.",
            removeResource: {
                messageLine1: "{{identifier}} bo odstranjen iz tega računa.",
                messageLine2:
                    "Ne boste več mogli uporabljati tega povezanega računa in vse odvisne funkcije ne bodo več delovale.",
                successMessage: "{{connectedAccount}} je bil odstranjen iz vašega računa.",
                title: "Odstrani povezan račun",
            },
            socialButtonsBlockButton: "{{provider|titleize}}",
            successMessage: "Ponudnik je bil dodan vašemu računu",
            title: "Dodaj povezan račun",
        },
        deletePage: {
            actionDescription: 'Vnesite "Izbriši račun" spodaj za nadaljevanje.',
            confirm: "Izbriši račun",
            messageLine1: "Ali ste prepričani, da želite izbrisati svoj račun?",
            messageLine2: "Ta dejanje je trajno in nepopravljivo.",
            title: "Izbriši račun",
        },
        emailAddressPage: {
            emailCode: {
                formHint: "Na ta e-poštni naslov bo poslano sporočilo z overitveno kodo.",
                formSubtitle: "Vnesite overitveno kodo, poslano na {{identifier}}",
                formTitle: "Overitvena koda",
                resendButton: "Niste prejeli kode? Ponovno pošlji",
                successMessage: "E-pošta {{identifier}} je bila dodana vašemu računu.",
            },
            emailLink: {
                formHint: "Na ta e-poštni naslov bo poslano sporočilo z overitveno povezavo.",
                formSubtitle:
                    "Kliknite na overitveno povezavo v sporočilu, poslanem na {{identifier}}",
                formTitle: "Overitvena povezava",
                resendButton: "Niste prejeli povezave? Ponovno pošlji",
                successMessage: "E-pošta {{identifier}} je bila dodana vašemu računu.",
            },
            removeResource: {
                messageLine1: "{{identifier}} bo odstranjen iz tega računa.",
                messageLine2: "Ne boste več mogli prijaviti se z uporabo tega e-poštnega naslova.",
                successMessage: "{{emailAddress}} je bil odstranjen iz vašega računa.",
                title: "Odstrani e-poštni naslov",
            },
            title: "Dodaj e-poštni naslov",
        },
        formButtonPrimary__continue: "Nadaljuj",
        formButtonPrimary__finish: "Dokončaj",
        formButtonReset: "Prekliči",
        mfaPage: {
            formHint: "Izberite metodo za dodajanje.",
            title: "Dodaj dvofaktorsko overitev",
        },
        mfaPhoneCodePage: {
            primaryButton__addPhoneNumber: "Dodaj telefonsko številko",
            removeResource: {
                messageLine1: "{{identifier}} ne bo več prejemal overitvenih kod pri prijavi.",
                messageLine2:
                    "Vaš račun morda ne bo tako varen. Ali ste prepričani, da želite nadaljevati?",
                successMessage:
                    "Dvofaktorska overitev s SMS kodo je bila odstranjena za {{mfaPhoneCode}}",
                title: "Odstrani dvofaktorsko overitev",
            },
            subtitle__availablePhoneNumbers:
                "Izberite obstoječo telefonsko številko za registracijo za dvofaktorsko overitev s SMS kodo ali dodajte novo.",
            subtitle__unavailablePhoneNumbers:
                "Ni na voljo telefonskih številk za registracijo za dvofaktorsko overitev s SMS kodo, prosimo dodajte novo.",
            successMessage:
                "Pri prijavi boste morali vnesti overitveno kodo, poslano na to telefonsko številko kot dodaten korak.",
            title: "Dodaj overitev s SMS kodo",
        },
        mfaTOTPPage: {
            authenticatorApp: {
                buttonAbleToScan__nonPrimary: "Namesto tega skenirajte QR kodo",
                buttonUnableToScan__nonPrimary: "Ne morete skenirati QR kode?",
                infoText__ableToScan:
                    "Nastavite novo metodo prijave v svoji overitveni aplikaciji in skenirajte spodnjo QR kodo za povezavo z vašim računom.",
                infoText__unableToScan:
                    "Nastavite novo metodo prijave v svoji overitveni aplikaciji in vnesite spodnji ključ za povezavo z vašim računom.",
                inputLabel__unableToScan1:
                    'Prepričajte se, da je omogočeno "Time-based" ali "One-time passwords", nato dokončajte povezovanje z vašim računom.',
                inputLabel__unableToScan2:
                    "Alternativno, če vaša overitvena aplikacija podpira TOTP URI-je, lahko kopirate celoten URI.",
            },
            removeResource: {
                messageLine1:
                    "Overitvene kode iz te overitvene aplikacije ne bodo več potrebne pri prijavi.",
                messageLine2:
                    "Vaš račun morda ne bo tako varen. Ali ste prepričani, da želite nadaljevati?",
                successMessage:
                    "Dvofaktorska overitev preko overitvene aplikacije je bila odstranjena.",
                title: "Odstrani dvofaktorsko overitev",
            },
            successMessage:
                "Dvofaktorska overitev je zdaj omogočena. Pri prijavi boste morali vnesti overitveno kodo iz te overitvene aplikacije kot dodaten korak.",
            title: "Dodaj overitveno aplikacijo",
            verifySubtitle: "Vnesite overitveno kodo, ustvarjeno z vašo overitveno aplikacijo",
            verifyTitle: "Overitvena koda",
        },
        mobileButton__menu: "Meni",

        passwordPage: {
            readonly:
                "Vašega gesla trenutno ni mogoče urediti, ker se lahko prijavite samo preko podjetniške povezave.",
        },
        phoneNumberPage: {
            infoText:
                "Na to telefonsko številko bo poslano sporočilo z overitveno kodo. Lahko se zaračunajo sporočilne in podatkovne storitve.",
            removeResource: {
                messageLine1: "{{identifier}} bo odstranjen iz tega računa.",
                messageLine2: "Ne boste več mogli prijaviti se z uporabo te telefonske številke.",
                successMessage: "{{phoneNumber}} je bil odstranjen iz vašega računa.",
                title: "Odstrani telefonsko številko",
            },
            successMessage: "{{identifier}} je bil dodan vašemu računu.",
            title: "Dodaj telefonsko številko",
        },
        profilePage: {
            fileDropAreaHint: "Priporočena velikost 1:1, do 10MB.",
            imageFormDestructiveActionSubtitle: "Odstrani",
            imageFormSubtitle: "Naloži",
            imageFormTitle: "Slika profila",
            readonly:
                "Vaši profilni podatki so bili posredovani preko podjetniške povezave in jih ni mogoče urediti.",
            successMessage: "Vaš profil je bil posodobljen.",
            title: "Posodobi profil",
            fileDropAreaTitle: "Povleci in spusti za nalaganje",
            fileDropAreaAction: "Izberi datoteko",
        },
        start: {
            headerSubtitle__security: "Nastavite varnostne nastavitve za vaš račun.",
            headerSubtitle__account: "Upravljajte podrobnosti vašega računa.",
            activeDevicesSection: {
                destructiveAction: "Odjava",
                title: "Aktivne naprave",
                destructiveActionTitle: "Odjava iz naprave",
                destructiveActionSubtitle: "Odjavite se iz svojega računa v tej napravi",
                detailsTitle: "Trenutna naprava",
                detailsSubtitle: "To je trenutna naprava, ki je prijavljena v vaš račun",
            },
            connectedAccountsSection: {
                actionLabel__connectionFailed: "Poskusite znova",
                actionLabel__reauthorize: "Pooblastite zdaj",
                destructiveActionTitle: "Odstrani",
                primaryButton: "Poveži račun",
                subtitle__reauthorize:
                    "Potrebne so bile posodobitve dovoljenj, in lahko doživljate omejeno funkcionalnost. Prosimo, znova pooblastite to aplikacijo, da se izognete težavam",
                title: "Povezani računi",
            },
            dangerSection: {
                deleteAccountButton: "Izbriši račun",
                title: "Izbriši račun",
                deleteAccountTitle: "Izbriši račun",
                deleteAccountDescription: "Izbriši račun in vse povezane podatke.",
            },
            emailAddressesSection: {
                destructiveAction: "Odstrani e-pošto",
                detailsAction__nonPrimary: "Nastavi kot primarno",
                detailsAction__primary: "Dokončaj preverjanje",
                detailsAction__unverified: "Preveri",
                primaryButton: "Dodaj e-poštni naslov",
                title: "E-poštni naslovi",
            },
            enterpriseAccountsSection: {
                title: "Podjetniški računi",
            },
            headerTitle__account: "Podrobnosti",
            headerTitle__security: "Varnost",
            mfaSection: {
                backupCodes: {
                    actionLabel__regenerate: "Regeneriraj",
                    headerTitle: "Rezervne kode",
                    subtitle__regenerate:
                        "Pridobite nov niz varnih rezervnih kod. Prejšnje rezervne kode bodo izbrisane in jih ne bo mogoče uporabiti.",
                    title__regenerate: "Regeneriraj rezervne kode",
                },
                phoneCode: {
                    actionLabel__setDefault: "Nastavi kot privzeto",
                    destructiveActionLabel: "Odstrani",
                },
                primaryButton: "Dodaj dvofaktorsko overitev",
                title: "Dvofaktorska overitev",
                totp: {
                    destructiveActionTitle: "Odstrani",
                    headerTitle: "Overitvena aplikacija",
                },
            },
            passwordSection: {
                primaryButton__setPassword: "Nastavi geslo",
                title: "Geslo",
                primaryButton__changePassword: "Spremeni geslo",
            },
            phoneNumbersSection: {
                destructiveAction: "Odstrani telefonsko številko",
                detailsAction__nonPrimary: "Nastavi kot primarno",
                detailsAction__primary: "Dokončaj preverjanje",
                detailsAction__unverified: "Preveri telefonsko številko",
                primaryButton: "Dodaj telefonsko številko",
                title: "Telefonske številke",
            },
            profileSection: {
                title: "Profil",
            },
            usernameSection: {
                primaryButton__setUsername: "Nastavi uporabniško ime",
                title: "Uporabniško ime",
                primaryButton__changeUsername: "Spremeni uporabniško ime",
            },
            web3WalletsSection: {
                destructiveAction: "Odstrani denarnico",
                primaryButton: "Spletne denarnice Web3",
                title: "Spletne denarnice Web3",
            },
        },
        usernamePage: {
            successMessage: "Vaše uporabniško ime je bilo posodobljeno.",
        },
        web3WalletPage: {
            removeResource: {
                messageLine1: "{{identifier}} bo odstranjen iz tega računa.",
                messageLine2:
                    "Ne boste več mogli prijaviti se z uporabo te spletne denarnice Web3.",
                successMessage: "{{web3Wallet}} je bila odstranjena iz vašega računa.",
                title: "Odstrani spletno denarnico Web3",
            },
            subtitle__availableWallets:
                "Izberite spletno denarnico Web3 za povezavo z vašim računom.",
            subtitle__unavailableWallets: "Ni na voljo spletnih denarnic Web3.",
            successMessage: "Denarnica je bila dodana vašemu računu.",
            title: "Dodaj spletno denarnico Web3",
        },
    },
} as const;
