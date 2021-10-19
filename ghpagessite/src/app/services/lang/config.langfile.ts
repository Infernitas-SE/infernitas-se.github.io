export const langs = [
    {
        'name': 'de',
        'displayName': 'German',
        'translations': [
            /* Navbar */
            { 'name': 'navbar-brand', value: 'Infernitas SE' },
            { 'name': 'navbar-about', value: 'Über uns' },
            { 'name': 'navbar-projects', value: 'Projekte' },
            { 'name': 'navbar-people', value: 'Mitarbeiter' },
            { 'name': 'navbar-contact', value: 'Kontakt' },
            /* Under Construction */
            { 'name': 'underconstruction-hello', value: 'Hallo!' },
            { 'name': 'underconstruction-branding', value: 'Willkommen bei Infernitas SE' },
            { 'name': 'underconstruction-beingBuilt', value: 'Diese Website ist momentan noch in der Entwicklung' },
            { 'name': 'underconstruction-wait', value: 'Bitte warten Sie !' }
        ]
    },
    {
        'name': 'en',
        'displayName': 'English',
        'translations': [
            /* Navbar */
            { 'name': 'navbar-brand', value: 'Infernitas SE' },
            { 'name': 'navbar-about', value: 'About Us' },
            { 'name': 'navbar-projects', value: 'Projects' },
            { 'name': 'navbar-people', value: 'People' },
            { 'name': 'navbar-contact', value: 'Contact' },
            /* Under Construction */
            { 'name': 'underconstruction-hello', value: 'Hello!' },
            { 'name': 'underconstruction-branding', value: 'Welcome to Infernitas SE' },
            { 'name': 'underconstruction-beingBuilt', value: 'This Website is currently being Built' },
            { 'name': 'underconstruction-wait', value: 'Please wait!' }
        ]
    }
]

export interface LangConfig 
{
    langName: string;
    request: string;
    translated: string;
}