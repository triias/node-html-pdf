function pad(n) {
    return n < 10 ? n + '0' : n
}
var templateDataObject = {
    organisation: {
        logo: 'logo',
        logoimg: '../../images/logo.jpg',
        name: 'Die kleine Schwimmschule',
        owner: {
            first: 'Gaby',
            last: 'Schünemann',
        },
        address: {
            street: 'Bulachstraße 8',
            zip: '85232 ',
            city: 'Bergkirchen',
        },
        phone: '08131 33 55 323',
        fax: '',
        email: 'info@kleine-schwimmschule.de',
        website: 'www.kleine-schwimmschule.de',
        bankAccount: {
            accountNumber: 'DE 8908 8990 2376 092',
            BLZ: 'GEN 7278 7266 365',
            IBAN: 'DE05 1001 1001 2629 4985 19',
            BIC: 'NTSBDEB1XXX',
        },
        businessForm: 'Gbr.',
        localCourt: 'Amtsgericht Dachau',
        taxId: 'DE 322 139 167',
        taxNumber: '107/224/31141',
    },
    contactPerson: 'Matthias Häring',
    invoice: {
        invoiceNumber: 'RE-10181',
        dateOfInvoicing: '22.11.2020',
        dueDate: '01.12.2020',
    },
    booker: {
        customerNumber: 'K-93288',
        firstName: 'Wolfgang',
        lastName: 'Schünemann',
        gender: 'male',
        address: {
            street: 'Weinbreite 11',
            zip: '85232',
            city: 'Bergkirchen',
        },
        phone: '',
        fax: '',
        email: 'wolfgang@kursorganizer.com',
        contact: 'Wolfgang',
    },
    attendee: {
        firstName: 'Paul',
        lastName: 'Schünemann',
    },
    course: {
        courseTypeName: 'Pingu-Schwimmkurs',
        courseNumber: 'PIK-100049',
        firstLesson: '01.12.2020',
        lessons: [{
                num: 1,
                date: '01.12.2020',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: '30',
            },
            {
                num: 2,
                date: '08.12.2020',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
            {
                num: 3,
                date: '15.12.2020',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
            {
                num: 4,
                date: '22.12.2020',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
            {
                num: 5,
                date: '29.12.2020',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
            {
                num: 6,
                date: '05.01.2021',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
            {
                num: 7,
                date: '12.01.2021',
                start: '17:30',
                end: '19:00',
                dow: 'Dienstag',
                cross: 30,
            },
        ],
        totalAmountCross: 210,
        vatAmount: function() {
            return pad((this.course.totalAmountCross * this.course.vat) / 100)
        },
        vat: 16,
    },
    subject: 'Buchungsbestätigung',
    //headerText: `Hallo `${function () {return 'hi'}} `{{booker.lastName}},\nherzlichen Dank für Deine Anmeldung bei {{organisation.name}}\nBald ghet es für{{attendee.firstName}} {{attendee.lastName}} los!`,
    headerText: function() {
        return (
            'Hallo ' +
            this.booker.firstName +
            ' ' +
            this.booker.lastName +
            'herzlichen Dank für Deine Anmeldung bei ' +
            this.organisation.name +
            '. ' +
            'Bald geht es los für ' +
            this.attendee.firstName +
            ' ' +
            this.attendee.lastName +
            ' !'
        )
    },
    footerText: 'Bitte beachte, dass wir in einigen Bädern in den Schulferien nicht schwimmtn. Bitte beachte auch unsere Allgemeinen Geschäftsbedingungen und unsere Widerrufsbelehrung und die EInwilligungserklärung für Fotoaufnahmen während des Kurses.',
    signatureText: 'Danke und ein herzliches Servus \n Deine kleine Schwimmschule',
}

var templateData = templateDataObject

exports = templateData