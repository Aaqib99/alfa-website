import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";

// import AboutUSComp from '../Components/AboutUSComp';
const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Terms And Conditions
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Alfa Terms Of Service
        </h1>
        <ul
          className="list-disc text-lg mt-8 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">General Terms</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            By accessing and placing an order with ALFA, you confirm that you
            are in agreement with and bound by the terms of service contained in
            the Terms & Conditions outlined below. These terms apply to the
            entire website and any email or other type of communication between
            you and ALFA.
            <br />
            <br />
            Under no circumstances shall ALFA team be liable for any direct,
            indirect, special, incidental or consequential damages, including,
            but not limited to, loss of data or profit, arising out of the use,
            or the inability to use, the materials on this site, even if ALFA
            team or an authorized representative has been advised of the
            possibility of such damages. If your use of materials from this site
            results in the need for servicing, repair or correction of equipment
            or data, you assume any costs thereof.
            <br />
            <br />
            ALFA will not be responsible for any outcome that may occur during
            the course of usage of our resources. We reserve the right to change
            prices and revise the resources usage policy at any moment.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">License</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA grants you a revocable, non-exclusive, non-transferable,
            limited license to download, install and use the website strictly in
            accordance with the terms of this Agreement.
            <br />
            <br />
            These Terms & Conditions are a contract between you and ALFA
            (referred to in these Terms & Conditions as “ALFA”, “us”, “we” or
            “our”), the provider of the ALFA website and the services accessible
            from the ALFA website (which are collectively referred to in these
            Terms & Conditions as the “ALFA Service”).
            <br />
            <br />
            You agree to be bound by these Terms & Conditions. If you do not
            agree to these Terms & Conditions, please do not use the ALFA
            Service. In these Terms & Conditions, “you” refers both to you as an
            individual and to the entity you represent. If you violate any of
            these Terms & Conditions, we reserve the right to cancel your
            account or block access to your account without notice.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Definitions and Key Terms</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            To help explain things as clearly as possible in these Terms &
            Conditions, every time any of these terms are referenced, they are
            strictly defined as follows:
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Cookie</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            A small amount of data generated by a website and saved by your web
            browser. It is used to identify your browser, provide analytics,
            remember information about you such as your language preference or
            login information.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Company</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            When this policy mentions “Company,” “we,” “us,” or “our,” it refers
            to ALFA, located at Prince Mansour Street, Dammam, Eastern Province,
            Saudi Arabia, that is responsible for your information under this
            Privacy Policy.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Country</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Where ALFA or the owners/founders of ALFA are based, in this case,
            Saudi Arabia.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Service</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Refers to the service provided by ALFA as described in the relative
            terms (if available) and on this platform.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Third-Party Service</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Refers to advertisers, contest sponsors, promotional and marketing
            partners, and others who provide our content or whose products or
            services we think may interest you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">You</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            A person or entity that is registered with ALFA to use the Services.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Your Suggestions</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Any feedback, comments, ideas, improvements, or suggestions
            (collectively, “Suggestions”) provided by you to ALFA with respect
            to the website shall remain the sole and exclusive property of ALFA.
            <br />
            ALFA shall be free to use, copy, modify, publish, or redistribute
            the Suggestions for any purpose and in any way without any credit or
            compensation to you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Your Consent</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            We’ve updated our Terms & Conditions to provide you with complete
            transparency into what is being set when you visit our site and how
            it’s being used. By using our website, registering an account, or
            making a purchase, you hereby consent to our Terms & Conditions.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Links to Other Websites</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            These Terms & Conditions apply only to the Services. The Services
            may contain links to other websites not operated or controlled by
            ALFA. We are not responsible for the content, accuracy, or opinions
            expressed in such websites, and such websites are not investigated,
            monitored, or checked for accuracy or completeness by us.
            <br /> Please remember that when you use a link to go from the
            Services to another website, our Terms & Conditions are no longer in
            effect. Your browsing and interaction on any other website,
            including those that have a link on our platform, is subject to that
            website’s own rules and policies. Third parties may use their own
            cookies or other methods to collect information about you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Cookies</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA uses “Cookies” to identify the areas of our website that you
            have visited. A Cookie is a small piece of data stored on your
            computer or mobile device by your web browser. We use Cookies to
            enhance the performance and functionality of our website but are
            non-essential to their use. However, without these cookies, certain
            functionalities like videos may become unavailable or you would be
            required to enter your login details every time you visit the
            website as we would not be able to remember that you had logged in
            previously.
            <br /> Most web browsers can be set to disable the use of Cookies.
            However, if you disable Cookies, you may not be able to access
            functionality on our website correctly or at all. We never place
            Personally Identifiable Information in Cookies.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">
            Changes To Our Terms & Conditions
          </p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            You acknowledge and agree that ALFA may stop (permanently or
            temporarily) providing the Service (or any features within the
            Service) to you or to users generally at ALFA’s sole discretion,
            without prior notice to you. You may stop using the Service at any
            time. You do not need to specifically inform ALFA when you stop
            using the Service. You acknowledge and agree that if ALFA disables
            access to your account, you may be prevented from accessing the
            Service, your account details, or any files or other materials which
            are contained in your account.
            <br />
            <br />
            If we decide to change our Terms & Conditions, we will post those
            changes on this page, and/or update the Terms & Conditions
            modification date below.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Modifications to Our Website</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA reserves the right to modify, suspend, or discontinue,
            temporarily or permanently, the website or any service to which it
            connects, with or without notice and without liability to you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Updates to Our Website</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA may from time to time provide enhancements or improvements to
            the features/functionality of the website, which may include
            patches, bug fixes, updates, upgrades, and other modifications
            (“Updates”).
            <br />
            <br />
            Updates may modify or delete certain features and/or functionalities
            of the website. You agree that ALFA has no obligation to (i) provide
            any Updates, or (ii) continue to provide or enable any particular
            features and/or functionalities of the website to you. You further
            agree that all Updates will be (a) deemed to constitute an integral
            part of the website, and (b) subject to the terms and conditions of
            this Agreement.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Third-Party Services</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            We may display, include, or make available third-party content
            (including data, information, applications, and other
            products/services) or provide links to third-party websites or
            services (“Third-Party Services”).
            <br />
            <br />
            You acknowledge and agree that ALFA shall not be responsible for any
            Third-Party Services, including their accuracy, completeness,
            timeliness, validity, copyright compliance, legality, decency,
            quality, or any other aspect thereof. ALFA does not assume and shall
            not have any liability or responsibility to you or any other person
            or entity for any Third-Party Services.
            <br />
            <br />
            Third-Party Services and links thereto are provided solely as a
            convenience to you, and you access and use them entirely at your own
            risk and subject to such third parties’ terms and conditions.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">
            Copyright Infringement Notice
          </p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            If you are a copyright owner or such owner’s agent and believe any
            material on our website constitutes an infringement on your
            copyright, please contact us setting forth the following
            information: (a) a physical or electronic signature of the copyright
            owner or a person authorized to act on his behalf; (b)
            identification of the material that is claimed to be infringing; (c)
            your contact information, including your address, telephone number,
            and an email.; (d) a statement by you that you have a good faith
            belief that use of the material is not authorized by the copyright
            owners; and (e) the a statement that the information in the
            notification is accurate, and, under penalty of perjury you are
            authorized to act on behalf of the owner.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Indemnification</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            You agree to indemnify and hold ALFA and its parents, subsidiaries,
            affiliates, officers, employees, agents, partners, and licensors (if
            any) harmless from any claim or demand, including reasonable
            attorneys’ fees, due to or arising out of your: (a) use of the
            website; (b) violation of this Agreement or any law or regulation;
            or (c) violation of any right of a third party.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">No Warranties</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            The website is provided to you “AS IS” and “AS AVAILABLE” and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, ALFA , on its own behalf and
            on behalf of its affiliates and its and their respective licensors
            and service providers, expressly disclaims all warranties, whether
            express, implied, statutory or otherwise, with respect to the
            website, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, ALFA provides no warranty or undertaking and makes no
            representation of any kind that the website will meet your
            requirements, achieve any intended results, be compatible or work
            with any other software, websites, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
            <br />
            <br />
            Without limiting the foregoing, neither ALFA nor any ALFA ‘s
            provider makes any representation or warranty of any kind, express
            or implied: (I) as to the operation or availability of the website,
            or the information, content, and materials or products included
            thereon; (ii) that the website will be uninterrupted or error-free;
            (iii) as to the accuracy, reliability, or currency of any
            information or content provided through the website; or (iv) that
            the website, its servers, the content, or e-mails sent from or on
            behalf of ALFA are free of viruses, scripts, trojan horses, worms,
            malware, timebombs or other harmful components.
            <br />
            <br />
            Some jurisdictions do not allow the exclusion of or limitations on
            implied warranties or the limitations on the applicable statutory
            rights of a consumer, so some or all of the above exclusions and
            limitations may not apply to you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Limitation of Liability</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Notwithstanding any damages that you might incur, the entire
            liability of ALFA and any of its suppliers under any provision of
            this Agreement and your exclusive remedy for all of the foregoing
            shall be limited to the amount actually paid by you for the website.
            <br />
            <br />
            To the maximum extent permitted by applicable law, in no event shall
            ALFA or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, for loss of data or other
            information, for business interruption, for personal injury, for
            loss of privacy arising out of or in any way related to the use of
            or inability to use the website, third-party software and/or
            third-party hardware used with the website, or otherwise in
            connection with any provision of this Agreement), even if ALFA or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
            <br />
            <br />
            Some states/jurisdictions do not allow the exclusion or limitation
            of incidental or consequential damages, so the above limitation or
            exclusion may not apply to you.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Severability</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            If any provision of this Agreement is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
            <br />
            <br />
            This Agreement, together with the Privacy Policy and any other legal
            notices published by ALFA on the Services, shall constitute the
            entire agreement between you and ALFA concerning the Services. If
            any provision of this Agreement is deemed invalid by a court of
            competent jurisdiction, the invalidity of such provision shall not
            affect the validity of the remaining provisions of this Agreement,
            which shall remain in full force and effect. No waiver of any term
            of this Agreement shall be deemed a further or continuing waiver of
            such term or any other term, and ALFA’s failure to assert any right
            or provision under this Agreement shall not constitute a waiver of
            such right or provision. YOU AND ALFA AGREE THAT ANY CAUSE OF ACTION
            ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE
            (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF
            ACTION IS PERMANENTLY BARRED.
            <br />
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Waiver</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Agreement shall not
            affect a party’s ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute waiver of any subsequent breach.
            <br />
            <br />
            No failure to exercise, and no delay in exercising, on the part of
            either party, any right or any power under this Agreement shall
            operate as a waiver of that right or power. Nor shall any single or
            partial exercise of any right or power under this Agreement preclude
            further exercise of that or any other right granted herein. In the
            event of a conflict between this Agreement and any applicable
            purchase or other terms, the terms of this Agreement shall govern.
            <br />
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Amendments to this Agreement</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA reserves the right, at its sole discretion, to modify or
            replace this Agreement at any time. If a revision is material, we
            will provide at least 30 days’ notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
            <br />
            <br />
            By continuing to access or use our website after any revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, you are no longer authorized to use
            ALFA.
            <br />
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Entire Agreement</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            The Agreement constitutes the entire agreement between you and ALFA
            regarding your use of the website and supersedes all prior and
            contemporaneous written or oral agreements between you and ALFA.
            <br />
            <br />
            You may be subject to additional terms and conditions that apply
            when you use or purchase other ALFA ‘s services, which ALFA will
            provide you at the time of such use or purchase.
            <br />
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Updates to Our Terms</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            We may change our Service and policies, and we may need to make
            changes to these Terms so that they accurately reflect our Service
            and policies. Unless otherwise required by law, we will notify you
            (for example, through our Service) before we make changes to these
            Terms and give you an opportunity to review them before they go into
            effect. Then, if you continue to use the Service, you will be bound
            by the updated Terms. If you do not want to agree to these or any
            updated Terms, you can delete your account.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Intellectual Property</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            The website and its entire contents, features and functionality
            (including but not limited to all information, software, text,
            displays, images, video and audio, and the design, selection and
            arrangement thereof), are owned by ALFA, its licensors or other
            providers of such material and are protected by Saudi Arabia and
            international copyright, trademark, patent, trade secret and other
            intellectual property or proprietary rights laws. The material may
            not be copied, modified, reproduced, downloaded or distributed in
            any way, in whole or in part, without the express prior written
            permission of ALFA, unless and except as is expressly provided in
            these Terms & Conditions. Any unauthorized use of the material is
            prohibited.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Agreement to Arbitrate</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            This section applies to any dispute EXCEPT IT DOESN’T INCLUDE A
            DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF
            REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR ALFA’s INTELLECTUAL
            PROPERTY RIGHTS. The term “dispute” means any dispute, action, or
            other controversy between you and ALFA concerning the Services or
            this agreement, whether in contract, warranty, tort, statute,
            regulation, ordinance, or any other legal or equitable basis.
            “Dispute” will be given the broadest possible meaning allowable
            under law.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Notice of Dispute</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            In the event of a dispute, you or ALFA must give the other a Notice
            of Dispute, which is a written statement that sets forth the name,
            address, and contact information of the party giving it, the facts
            giving rise to the dispute, and the relief requested. You must send
            any Notice of Dispute via email to: ALFA will send any Notice of
            Dispute to you by mail to your address if we have it, or otherwise
            to your email address. You and ALFA will attempt to resolve any
            dispute through informal negotiation within sixty (60) days from the
            date the Notice of Dispute is sent. After sixty (60) days, if you or
            ALFA do not succeed in settling the dispute, then the dispute shall
            be resolved according to the competent jurisdiction in Dammam,
            Eastern Province.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Submissions and Privacy</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            In the event that you submit or post any ideas, creative
            suggestions, designs, photographs, information, advertisements,
            data, or proposals, including ideas for new or improved products,
            services, features, technologies, or promotions, you expressly agree
            that such submissions will automatically be treated as
            non-confidential and non-proprietary and will become the sole
            property of ALFA without any compensation or credit to you
            whatsoever. ALFA and its affiliates shall have no obligations with
            respect to such submissions or posts and may use the ideas contained
            in such submissions or posts for any purposes in any medium in
            perpetuity, including, but not limited to, developing,
            manufacturing, and marketing products and services using such ideas.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Typographical Errors</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            In the event a product and/or service is listed at an incorrect
            price or with incorrect information due to typographical error, we
            shall have the right to refuse or cancel any orders placed for the
            product and/or service listed at the incorrect price. We shall have
            the right to refuse or cancel any such order whether or not the
            order has been confirmed and your credit card charged. If your
            credit card has already been charged for the purchase and your order
            is canceled, we shall immediately issue a credit to your credit card
            account or other payment account in the amount of the charge.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Miscellaneous</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            If for any reason a court of competent jurisdiction finds any
            provision or portion of these Terms & Conditions to be
            unenforceable, the remainder of these Terms & Conditions will
            continue in full force and effect. Any waiver of any provision of
            these Terms & Conditions will be effective only if in writing and
            signed by an authorized representative of ALFA. ALFA will be
            entitled to injunctive or other equitable relief (without the
            obligations of posting any bond or surety) in the event of any
            breach or anticipatory breach by you. ALFA operates and controls the
            ALFA Service from its offices in Saudi Arabia. The Service is not
            intended for distribution to or use by any person or entity in any
            jurisdiction or country where such distribution or use would be
            contrary to law or regulation. Accordingly, those persons who choose
            to access the ALFA Service from other locations do so on their own
            initiative and are solely responsible for compliance with local
            laws, if and to the extent local laws are applicable. These Terms &
            Conditions (which include and incorporate the ALFA Privacy Policy)
            contain the entire understanding, and supersede all prior
            understandings, between you and ALFA concerning its subject matter,
            and cannot be changed or modified by you. The section headings used
            in this Agreement are for convenience only and will not be given any
            legal import.
          </p>
        </ul>
        <ul
          className="list-disc text-lg mt-4 list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <p className="font-medium text-2xl">Disclaimer</p>
          <p className="text-lg mt-4" style={{ color: "#20376D" }}>
            ALFA is not responsible for any content, code, or any other
            imprecision. ALFA does not provide warranties or guarantees. In no
            event shall ALFA be liable for any special, direct, indirect,
            consequential, or incidental damages or any damages whatsoever,
            whether in an action of contract, negligence or other tort, arising
            out of or in connection with the use of the Service or the contents
            of the Service. The Company reserves the right to make additions,
            deletions, or modifications to the contents on the Service at any
            time without prior notice. The ALFA Service and its contents are
            provided “as is” and “as available” without any warranty or
            representations of any kind, whether express or implied.
            <br />
            <br /> ALFA is a distributor and not a publisher of the content
            supplied by third parties; as such, ALFA exercises no editorial
            control over such content and makes no warranty or representation as
            to the accuracy, reliability, or currency of any information,
            content, service, or merchandise provided through or accessible via
            the ALFA Service. Without limiting the foregoing, ALFA specifically
            disclaims all warranties and representations in any content
            transmitted on or in connection with the ALFA Service or on sites
            that may appear as links on the ALFA Service, or in the products
            provided as a part of, or otherwise in connection with, the ALFA
            Service, including without limitation any warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement of third-party rights. No oral advice or written
            information given by ALFA or any of its affiliates, employees,
            officers, directors, agents, or the like will create a warranty.
            Price and availability information is subject to change without
            notice. Without limiting the foregoing, ALFA does not warrant that
            the ALFA Service will be uninterrupted, uncorrupted, timely, or
            error-free.
          </p>
        </ul>
      </div>
    </>
  );
};

export default TermsAndConditions;
