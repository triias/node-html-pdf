var template = `
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pay up front</title>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <style>
        html,
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-weight: 500;
            font-size: 8px;
            color: rgb(103, 103, 103);
            -webkit-print-color-adjust: exact;
            box-sizing: border-box;
        }
        
        .page {
            margin: auto;
            margin-top: 100px;
            padding: 40mm 25mm;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
        }
        /* 
@primary-color: #0760ff;
*/
        
        section {
            padding-bottom: 7mm;
        }
        
        @media print {
            .page {
                padding: 0;
                margin: 0;
            }
        }
        
        .small {
            font-size: 7px;
        }
        
        .centered {
            text-align: center;
        }
        
        .stack {
            display: flex;
            display: -webkit-flex;
        }
        
        .text-block {
            width: 100%;
        }
        
        .text-block-header {
            height: 4mm;
        }
        
        .right-aligned {
            text-align: right;
        }
        
        .light-grey {
            color: rgb(140, 140, 140);
        }
    </style>
</head>

<body>
    <div class="page">
        <section>
            <div class="small">{{organisation.name}} - {{organisation.address.street}} - {{organisation.address.zip}} {{organisation.address.city}}</div>
            <div class="stack">
                <div class='text-block'>
                    <h1 class='text-block-header'></h1>
                    <div>{{booker.firstName}} {{booker.lastName}}</div>
                    <div>{{booker.address.street}}</div>
                    <div>{{booker.address.zip}} {{booker.address.city}}</div>
                </div>
                <div class='text-block'></div>
                <div class='text-block'>
                    <h1 class='text-block-header'>Rechnungs-Nr.</h1>
                    <div>Rechnungsdatum</div>
                    <div>Ihre Kundennummer</div>
                    <div>Ihr Ansprechpartner</div>
                </div>
                <div class='text-block right-aligned'>
                    <h1 class='text-block-header'>{{invoice.invoiceNumber}}</h1>
                    <div>{{invoice.dateOfInvoicing}}</div>
                    <div>{{booker.customerNumber}}</div>
                    <div>{{contactPerson}}</div>
                </div>
            </div>
        </section>
        <section>
            <h1>Rechnung
                <h1/>
                <h3 class='light-grey'>{{course.courseTypeName}} {{course.courseNumber}}</h3>
                <p>
                    {{headerText}}
                </p>
                <div>
                    <h1>MainContent goes here</h1>
                </div>
                <p>
                    {{footerText}}
                </p>
                <p>
                    {{signatureText}}
                </p>
        </section>
        <div id="pageFooter">
            <section>
                <div class="stack light-grey">
                    <div class='text-block'>
                        <div>Die kleine Schwimmschule</div>
                        <div>Bulachstraße 8</div>
                        <div>85232 Bergkirchen</div>
                        <div></div>
                    </div>
                    <div class='text-block'>
                        <div>Tel.: 08131 33 55 323</div>
                        <div>E-Mail.: info@kleine-schwimmschule.de</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class='text-block'>
                        <div>Amtsgericht Dachau</div>
                        <div>Ust.-ID: DE 322 139 167</div>
                        <div>Steuer-Nr.: 107/224/31141</div>
                        <div>Inhaberin: Marta Weber</div>
                    </div>
                    <div class='text-block'>
                        <div>Konto: 262627783763</div>
                        <div>BLZ: 100110011</div>
                        <div>IBAN: DE0398388993002ß474830947583</div>
                        <div>BIC: NTCJDJE1XXX</div>
                    </div>
                </div>
            </section>
            <div class="centered light-grey">
                <span>{{page}}</span>/<span>{{pages}}</span>
            </div>

        </div>

    </div>
</body>
`

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
        website: 'kleine-schwimmschule.de',
        bankAccount: {
            accountNumber: 'DE 8908 8990 2376 092',
            BLZ: 'GEN 7278 7266 365',
            IBAN: 'DE05 1001 1001 2629 4985 19',
            BIC: 'NTSBDEB1XXX',
        },
        businessForm: 'Gbr.',
        localCourt: 'Amtsgericht Dachau',
        taxId: 'DE322139167',
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
                date: '01.12.2020',
                time: '17:30',
                net: '30',
            },
            {
                date: '07.12.2020',
                time: '17:30',
                net: '30',
            },
            {
                date: '14.12.2020',
                time: '17:30',
                net: '30',
            },
        ],
        totalAmountNet: '90',
        VAT: '16',
    },
}

var template = {
    templateStructure: template,
    templateData: templateDataObject,
}

module.exports = template