import { NewsItem } from './constants';

export const news: NewsItem[] = [{
  title: 'BCL 2.0 implementation ready for public testing',
  time: '2021-08-11 12:33:40 -0600',
  html: `NREL has completed development of Building Component Library 2.0 and it is now available for public testing at <a href="https://bcl2.nrel.gov/">https://bcl2.nrel.gov/</a>. The main BCL website is deprecated and will be replaced replaced by this new implementation.<br/>
        BCL 2.0 uses a set of GitHub repositories as the back-end for robustness, transparency, and flexibility: version-controlled Measures, Components, Weather Files, and more. Instructions are available on the new site for organizations and groups with BCL content to migrate their components and measures to GitHub repositories.`
}, {
  title: 'OpenStudio 3.2.1 SDK Release',
  time: '2021-06-28 11:00:35 -0600',
  html: `OpenStudio 3.2.1 SDK has been released. 3.2.1 is a minor release, this update includes performance improvements and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.2.1">Release Notes</a> for more information.`
}, {
  title: 'OpenStudio 3.2.0 SDK Release',
  time: '2021-05-05 02:01:23 -0600',
  html: `OpenStudio 3.2.0 SDK has been released. 3.2.0 is a major release, this update includes several new features, performance improvements, and bug fixes. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.2.0">Release Notes</a> for more information.`
}, {
  title: 'OpenStudio Application v1.1.0',
  time: '2021-01-28 11:44:01 -0700',
  html: `OpenStudio Application v1.1.0 has been released. This release is the first update of the separated OpenStudio SDK from the Application. View the complete <a href="https://github.com/openstudiocoalition/OpenStudioApplication/releases/tag/v1.1.0">Release Notes</a>.`
}, {
  title: 'New BCL implementation coming soon',
  time: '2020-11-11 13:02:04 -0700',
  html: `NREL is working on a new BCL implementation.  The current BCL website will be deprecated. The new BCL replacement will use a set of GitHub repositories as the back-end for robustness, transparency and flexibility: version-controlled Measures, Components, and Weather Files.
        NREL will migrate its current BCL content to a set of GitHub repositories and will provide instructions for organizations and groups with BCL content to do the same. The new BCL aims to preserve its API functionality (and syntax) and interface to existing DOE/NREL tools and to the OpenStudio Coalition’s OpenStudio Application.
        A minimal web interface will be provided.  Stay tuned for more information, launch date, and content migration instructions.`
}, {
  title: 'OpenStudio 3.1.0 SDK Release',
  time: '2020-10-16 19:53:13 -0600',
  html: `OpenStudio 3.1.0 SDK has been released. In OpenStudio 3.1.0, the SDK, EnergyPlus, standards, and server have all received improvements. Development and distribution of the OpenStudioApplication and the SketchUp plugin have transitioned to the independent OpenStudio Coalition.
        View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.1.0">Release Notes</a> for more information.`
}, {
  title: 'OpenStudio Application v1.0.0',
  time: '2020-04-27 17:22:34 -0600',
  html: `OpenStudio Application v1.0.0 has been released.  This release marks the first installment of the separated OpenStudio SDK from the Application.  View the complete <a href="https://github.com/NREL/OpenStudioApplication/releases/tag/v1.0.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 3.0.0 Release',
  time: '2020-04-27 10:11:46 -0600',
  html: `OpenStudio 3.0.0 has been released. In OpenStudio 3.0.0, the SDK, standards, and server have all received improvements. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.0.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.9.1 Release',
  time: '2019-12-06 17:03:47 -0700',
  html: `OpenStudio 2.9.1 has been released. In OpenStudio 2.9.1, the SDK, standards, and server have all received improvements. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.9.1">Release Notes</a>.`
}, {
  title: 'OpenStudio SDK v3.0.0-pre1 and OpenStudio Application v1.0.0-pre1',
  time: '2019-11-20 13:45:34 -0700',
  html: `Pre-releases of OpenStudio SDK v3.0.0 and OpenStudio Application v1.0.0 have been released.  This pre-release marks the first installment of the separated OpenStudio SDK from the Application.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v3.0.0-pre1">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.9.0 Release',
  time: '2019-10-11 14:09:07 -0600',
  html: `OpenStudio 2.9.0 has been released. In OpenStudio 2.9.0, the SDK, standards, and server have all received improvements. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.9.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.8.0 Release',
  time: '2019-04-15 10:44:05 -0600',
  html: `OpenStudio 2.8.0 has been released. ` + `<br/>` + `In OpenStudio 2.8.0, the SDK, standards, and server have all received improvements.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.8.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.7.0 Release',
  time: '2018-10-16 11:39:59 -0600',
  html: `OpenStudio 2.7.0 has been released. ` + `<br/>` + `In OpenStudio 2.7.0, the SDK, standards, and server have all received improvements.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.7.0">Release Notes</a>.`
}, {
  title: 'A Shift in BTO’s BEM Strategy: A New Future for the OpenStudio Application',
  time: '2018-09-06 15:22:04 -0600',
  html: `<p>Whole-building energy modeling (BEM) is a multi-purpose enabling technology for improving building energy performance.
        BEM supports energy-efficiency applications such as integrated design, code development and compliance, ratings, program design and administration, product design, and policy and investment analysis.
        The U.S. Department of Energy’s Building Technologies Office (BTO) has supported BEM research and development for decades and has itself been a significant consumer of BEM.
        A significant part of BTO’s strategy is funding and managing the development of BEM software.
        The focus has largely been on physics engines such as DOE-2 and EnergyPlus—where BTO has emphasized transparency, advanced capabilities, and accuracy—but BTO has developed some applications as well.
        One highly visible example is the OpenStudio Application, a graphical model editing environment that works in conjunction with the OpenStudio SketchUp plug-in.
        Together, these have been responsible for a significant increase in EnergyPlus adoption.</p>

        <div style="padding-top:40px;padding-bottom:40px;">
        <div style=" text-align:center;display: inline-block;">
        <img class="ossap" src="assets/images/osapp.png" width="43%" style="padding-right:30px;" /><img src="assets/images/sketchup.png" width="35%" /></div>
        <div style="text-align: center; margin:auto;padding-top:5px;"><strong>Screenshots of OpenStudio Application and OpenStudio SketchUp Plug-In</strong></div></div>
        <br/>
        <p>Despite the success of the OpenStudio Application the most expedient and effective growth channel for BEM in general, and for open-source BEM tools in particular, is private-sector applications and services.
        <strong>After a year-long discussion with industry stakeholders, including the IBPSA-USA Advocacy Committee, BTO has decided to transition responsibility for management, development, distribution, and support of the OpenStudio Application to third parties by April 2020.</strong>
        This planned transition follows BTO’s previous move to de-emphasize and eventually phase-out the OpenStudio SketchUp Plug-in from its portfolio. BTO and the national labs will spend the next 18-plus months working to maximize the chances of a successful transition and to minimize disruption to existing OpenStudio Application users. </p>
        <div style="padding-top:40px;padding-bottom:40px;">
        <img style="display:inline;margin-left:auto;margin-right:auto;" src="assets/images/timeline.png" width="70%" /><br/>
        <div style="text-align:center;margin:auto;padding-top:10px;"><strong>OpenStudio Application Transition Timeline</strong></div></div>
        <p>The OpenStudio Application and SketchUp Plug-in are small parts of the larger OpenStudio project. The project also includes a set of non-graphical components collectively referred to as the OpenStudio SDK (Software Development Kit).
        The SDK provides programmatic access to EnergyPlus inputs and outputs via the OpenStudio Model API (Application Programming Interface), support for scripting and workflow automation via OpenStudio Measures and the OpenStudio CLI (Command Line Interface), prototype building models via the OpenStudio Standards gem, and large-scale simulation on local, cluster, and cloud resources via OpenStudio Server.
        <strong>BTO plans to retain the OpenStudio SDK—along with the graphical Parametric Analysis Tool (PAT) and Floorspace.JS geometry widget—within its open-source BEM software portfolio. Additionally, the Building Component Library (BCL) will continue to be maintained as a publicly available repository for OpenStudio Measures and other content.
        </strong> These components and capabilities benefit BTO and its project and analysis portfolio; they benefit end-users via a growing number of third-party applications and services that build upon them. Going forward, BTO will focus on supporting these components and developers who wish to take advantage of them.</p>
        <p>BTO and the labs plan to engage stakeholders throughout this process to both provide updates and receive feedback. Questions, concerns, or comments about this plan can be sent to <a href="mailto:openstudio@nrel.gov?subject=OpenStudio%20Application%20Separation">openstudio@nrel.gov</a>.</p>
        <br/>
        <h2>Frequently Asked Questions</h2>
        <ul><li>Why is BTO making this transition?
        <ul style="padding-bottom:10px;"><li>The planned transition of the OpenStudio Application is BTO’s attempt to balance interests stated by industry and formalized by the IBPSA-USA Advocacy Committee (<a href="https://www.ibpsa.us/committee/advocacy-committee"
        target="_blank">https://www.ibpsa.us/committee/advocacy-committee</a>) with needs of current users that depend on the OpenStudio Application for business needs.</li></ul></li>
        <li>Will the OpenStudio Application remain available throughout the transition?
        <ul style="padding-bottom:10px;"><li>Three OpenStudio SDK releases are planned during the transition period (April 2019, October 2019, April 2020).  Updates to and installers for the OpenStudio Application will be made available at each of these OpenStudio SDK releases.
        Source code and installers for the OpenStudio Application up to and including the April 2020 release will remain available after the transition period. </li></ul></li>
        <li>Who will the OpenStudio Application transition to?  Will the OpenStudio Application still be open-source/freeware after the transition? <ul style="padding-bottom:10px;"><li>The OpenStudio Application is currently licensed under a BSD 4-Clause open-source license.
        This license allows for any entity to fork the code for further development and distribution under a variety of licenses, open-source and otherwise.
        Currently, BTO and NREL are not considering transferring copyright of the OpenStudio Application or changing the open-source BSD 4-Clause license for code maintained by NREL before or during the transition period.
        NREL may explore licensing options for the use of the OpenStudio trademark or other assets by interested third-party developers and distributors upon request.  Given the recent timing of this announcement, no entity or entities have yet announced specific plans to continue support for the OpenStudio Application after the transition period.
        Any entities interested in potentially supporting or maintaining the OpenStudio Application should contact <a href="mailto:openstudio@nrel.gov">OpenStudio@nrel.gov</a> with any questions. </li></ul></li>
        <li>How can I be involved in this or other changes to OpenStudio in the future? <ul style="padding-bottom:10px;"><li>For future significant changes, BTO aims to gather broad stakeholder feedback before finalizing decisions. More information will be provided at a relevant time.</li></ul></li></ul>`
}, {
  title: 'OpenStudio 2.6.0 Release',
  time: '2019-07-13 13:23:15 -0600',
  html: `OpenStudio 2.6.0 has been released. <br/>In OpenStudio 2.6.0, the SDK, standards, and server have all received improvements.  This release includes new features to help write better measures.  View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.6.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.5.0 Release',
  time: '2018-03-30 10:50:23 -0600',
  html: `OpenStudio 2.5.0 has been released. In OpenStudio 2.5.0, the SDK, standards, and server have all received improvements. OpenStudio 2.5.0 also incorporates EnergyPlus 8.9. View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.5.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.4.0 Release',
  time: '2018-01-05 10:03:08 -0700',
  html: `OpenStudio 2.4.0 has been released.
        In OpenStudio 2.4.0 HVAC capability was extended, many new external interface objects were wrapped and are available via the API, and several new algorithms have been added to the OpenStudio Server that are available through PAT.
        View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.4.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.3.0 Release',
  time: '2017-10-04 12:50:24 -0600',
  html: `OpenStudio 2.3.0 has been released. <br/>The biggest new feature in OpenStudio 2.3.0 is the integration of the OpenStudio Geometry Editor in the OpenStudio Application.
        The OpenStudio Geometry Editor is a new, open source software module that developers can leverage to produce building energy modeling UIs that include geometry creation.
        The OpenStudio Geometry Editor is implemented in JavaScript with minimal dependencies, allowing it to be integrated into a wide range of applications.
        View the complete <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.3.0">Release Notes</a>.`
}, {
  title: 'OpenStudio 2.2.0 Release',
  time: '2017-07-10 16:30:17 -0600',
  html: `OpenStudio 2.2.0 has been released. For many years, OpenStudio has included ResultsViewer to visualize timeseries data.
        The plan for the next OpenStudio release (2.3.0) is to replace ResultsViewer with a visualization tool called DView, which was originally developed by NREL for viewing residential building and solar data.
        DView brings additional capabilities that ResultsViewer does not have, including IP unit conversion, CSV data export, image export, EPW weather file visualization, two synchronized views, stacked timeseries, average profiles, overview statistics, histograms, cumulative density plots, duration curves, and scatter plots.
        To learn more about DView, download its executable or its open source, cross-platform source code, click  <a href="https://github.com/NREL/wex">here</a>. Complete OpenStudio release notes are available <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.2.0">here</a>.`
}, {
  title: 'OpenStudio 2.1.0 Release',
  time: '2017-04-05 16:24:03 -0600',
  html: `OpenStudio 2.1.0 has been released.
        This release provides a new version of the OpenStudio Parametric Analysis Tool (PAT) which has been rewritten from the ground up as an example of JavaScript application development with OpenStudio.
        It has been packaged as an Electron desktop application and leverages OpenStudio Server for improved robustness, scalability, and capability.
        This new version of PAT supports “algorithmic” workflows – methods for automatically generating large sets of analysis data points.
        Choose from Design Of Experiments, Latin Hypercube Sampling, multiple optimization methods, and more to identify the most sensitive parameters in a model, calibrate a model against real consumption data, or optimize a model to balance multiple design objectives.
        Algorithmic analyses tend to be computationally intensive, so the new PAT supports simulation on Amazon Web Service or other resources provisioned with OpenStudio Server. Complete release notes are available <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.1.0">here</a>.`
}, {
  title: 'OpenStudio 2.0.0 Release',
  time: '2016-12-22 05:44:51 -0700',
  html: `OpenStudio 2.0.0 has been released.
        This release brings the new <a href="http://nrel.github.io/OpenStudio-user-documentation/reference/command_line_interface/">OpenStudio Command Line Interface</a> (CLI) for applying OpenStudio Measures and running simulations easily.
        This release also includes the second version of the Parametric Analysis Tool (PAT) for parametric studies.
        Packages can be downloaded <a href="https://www.openstudio.net/developers">here</a>.  Complete release notes are available <a href="https://github.com/NREL/OpenStudio/releases/tag/v2.0.0">here</a>.`
}, {
  title: 'OpenStudio 1.14.0 Release',
  time: '2016-12-14 08:04:48 -0700',
  html: `OpenStudio 1.14.0 is now available for download from the OpenStudio website.<br/>
        <br/>Within EnergyPlus, advanced building controls are typically implemented utilizing the EnergyManagementSystem (EMS) suite of objects.
        This involves defining Sensors and Actuators that interact with building parameters through Programs which are written in the EnergyPlus Runtime Language (ERL).
        With the creation and larger adoption of OpenStudio Measures, the desire to simulate advanced building and grid interaction related control strategies has only increased.
        To facilitate those efforts, the EMS objects have been wrapped in both the forward and reverse translators. The model objects are:<br/>
        <br/>•\tEnergyManagementSystemActuator
        <br/>•\tEnergyManagementSystemConstructionIndexVariable\
        <br/>•\tEnergyManagementSystemCurveOrTableIndexVariable
        <br/>•\tEnergyManagementSystemGlobalVariable
        <br/>•\tEnergyManagementSystemInternalVariable
        <br/>•\tEnergyManagementSystemMeteredOutputVariable
        <br/>•\tEnergyManagementSystemOutputVariable
        <br/>•\tEnergyManagementSystemProgram
        <br/>•\tEnergyManagementSystemProgramCallingManager
        <br/>•\tEnergyManagementSystemSensor
        <br/>•\tEnergyManagementSystemSubroutine
        <br/>•\tEnergyManagementSystemTrendVariable
        <br/>•\tOutputEnergyManagementSystem<br/>
        <br/>Currently the interface to include EMS into an OSM is strictly Measure based.  Adding these Objects to the GUI in the OS Application is currently being scoped for the upcoming fiscal year, however it is funding dependent.<br/>
        <br/>In the OSM file, most EMS objects will attach directly to Model objects thru their Handles or UIDs.
        Upon EnergyPlus translation, those UIDs are replaced with Object names. While most Objects have restricted parameters, Programs and Subroutines can either be defined line by line thru the Measure API or all at once by defining a large string block.<br/>
        <br/>Also, all EMS objects reverse translate so if there are large legacy IDF models, the user can use this to at least get a start on what the new OSM would look like.  One caveat is that when a referenced object exists that won’t reverse translate,
        OpenStudio will still translate the EMS object, but leave the referenced field blank and a warning message is thrown.
        The name of the object that didn’t translate is put in a comment above the EMS object so that the user can go find it in the IDF and manually figure out how to connect it up in the new OSM.<br/>
        <br/>In addition to the aforementioned EMS functionality, the following OpenStudio capability was implemented:<br/>
        <br/>•\tAdded BuildingUnit class for grouping Spaces into logical units
        <br/>•\tUpdated template OpenStudio Measures to work with OpenStudio 1.x and 2.x
        <br/>•\tAdded fuel type to OtherEquipment and CoilHeatingGas
        <br/>•\tEnforce lowercase names in runner.registerValue
        <br/>•\tAllow display name to be set instead of value for choice arguments<br/>
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md">https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.13.0 Release',
  time: '2016-09-29 14:02:55 -0600',
  html: `OpenStudio 1.13.0 is now available for download from the OpenStudio website.<br/>
        <br/>Generating code baseline models (aka Appendix G, LEED, Performance Rating Method) is a big part of an energy modeler's job because many things (LEED certification, utility incentives, etc.) are based on the difference between the proposed and baseline model.
        Historically, this process has been performed largely by hand, leaving room for errors in manual data entry or interpretation of the modeling requirements.  These errors cause delays and cost money because, when identified, they must be corrected by the modeler.
        In an effort to reduce the time modelers spend on this process (and free them up for more design work), the OpenStudio team has automated this baseline model generation process via a Measure, which will be available on BCL.
        This Measure modifies the envelope, loads, HVAC efficiencies, controls, etc. in the proposed model to transform it into the baseline.  While it may not cover all situations (specific limitations are listed when the Measure is run), it is expected to work for a large majority of projects.
        Because the result is an OpenStudio model, anything not covered by the Measure can be modified by hand.  This Measure was funded by Xcel Energy’s Energy Design Assistance Program, and was based on previous work to create the DOE Prototype Buildings.<br/>
        <br/>OpenStudio is now a Level 2 certified gbXML authoring tool, http://gbxml.org/OpenStudioCertification_Latest. A variety of enhancements and bug fixes were made to support the certification effort, see the full changelog for details.<br/>
        <br/>The OS:Meter object has been renamed to OS:Output:Meter, the Meter class name remains supported in Ruby bindings but users are encouraged to move to the new name OutputMeter.<br/>
        <br/>The following OpenStudio Model objects were added
        <br/>- OS:Generator:MicroTurbine
        <br/>- OS:Generator:MicroTurbine:HeatRecovery
        <br/>- OS:ElectricLoadCenter:Storage:Simple
        <br/>- OS:ElectricLoadCenter:Storage:Converter
        <br/>- OS:Meter:Custom
        <br/>- OS:Meter:CustomDecrement<br/>
        <br/>GridView speed was further enhanced with the use of ConcreteModelObjects<br/>
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md">https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.12.0 Release',
  time: '2016-06-29 08:22:12 -0600',
  html: `OpenStudio 1.12.0 is now available for download from the OpenStudio website.<br/>
        <br/>Starting with 1.11.1, OpenStudio has included a new Ruby library called openstudio-standards.  This library allows users to create the DOE Prototype Building and DOE Reference Building models in OpenStudio format.
        These models represent 16 different building types across all of the US climate zones for 6 vintages: pre-1980, 1980-2004, 90.1-2004, 90.1-2007, 90.1-2010, and 90.1-2013.  These models can be used for tasks like portfolio-scale studies and energy code change impact analysis.
        These models also provide examples of how to model a wide variety of 90.1 energy code requirements in OpenStudio.<br/>
        <br/>Model coverage has been expanded in OpenStudio 1.12.0, with the addition of 3 new OpenStudio model classes (SiteGroundTemperatureDeep, SiteGroundTemperatureShallow, and SiteGroundTemperatureFCfactorMethod), and the extension of the existing class ChillerElectricEIR with the addition of heat recovery.
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md">https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.11.0 Release',
  time: '2016-03-31 10:29:50 -0600',
  html: `OpenStudio 1.11.0 is now available for download from the OpenStudio website.<br/>
        Notable new features include:<br/>
        <br/>•    OpenStudio now supports EnergyPlus version 8.5.0
        <br/>•    OpenStudio now includes Radiance version 5.0.a.8
        <br/>•    Added support for graphical dual duct system layout in the OpenStudio Application
        <br/>•    Added class PointLatLon for converting geographic coordinates to building coordinates
        <br/>•    Added version_modified element to BCL Measure XML
        <br/>•    Correct parsing of ISO 8601 formatted time strings
        <br/>•    Radiance measure now supports multiple (unlimited) glare sensors per space
        <br/>•    Construction inheritance is now displayed in the space tab
        <br/>If the OpenStudio Plug-in does not automatically load in SketchUp, open the Window->Preferences->Extensions window in SketchUp and enable the OpenStudio plug-in if it is listed.<br/>
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md">https://github.com/NREL/OpenStudio/blob/develop/CHANGELOG.md</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.10.0 Re-release',
  time: '2016-01-25 10:28:07 -0700',
  html: `OpenStudio 1.10.0 has been re-released with an important bug fix.
        This bug fix will allow you to open PAT projects from previous versions of OpenStudio, even if those projects were previously opened in PAT 1.10.0 and failed to update: <a href="https://github.com/NREL/OpenStudio/issues/2026">https://github.com/NREL/OpenStudio/issues/2026</a>.`
}, {
  title: 'OpenStudio 1.10.0 Release',
  time: '2015-12-17 10:20:57 -0700',
  html: `OpenStudio 1.10.0 is now available for download from the OpenStudio website.<br/>
        Notable new features include:<br/>
        <br/>- Updated plug-in to work with SketchUp 2016.
        <br/>- The Radiance Daylighting Measure was improved.
        <br/>- Minor enhancements were made to standard OpenStudio simulation results.
        <br/>- HVAC has additional capability.
        <br/>- GridView was extended and improved.<br/>
        <br/>If the OpenStudio Plug-in does not automatically load in SketchUp, open the Window->Preferences->Extensions window in SketchUp and enable the OpenStudio plug-in if it is listed.<br/>
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/releases/tag/v1.10.0">release notes</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.9.0 Release',
  time: '2015-09-28 13:21:52 -0600',
  html: `OpenStudio 1.9.0 is now available for download from the OpenStudio website.<br/>
        <br/>Notable new features include:<br/>
        <br/>- The addition of a substantial number of new HVAC features. Among the new features are three entirely new categories of HVAC capability beyond the routine component additions.
        The first new category is a family of availability managers that allow for detailed control over the air system period of operation.
        With these new availability managers, it is possible to have detailed control over night cycling, night ventilation, optimum morning start, temperature-based on/off and more.
        The second new category of HVAC capability included in this release is another family of control related inputs known as plant operation schemes.
        With plant operation schemes, it is possible to control the sequencing of plant system supply components relative to one another while considering ambient conditions.
        Third, OpenStudio has added support for dual duct air based systems.
        <br/>- A number of enhancements in areas beyond HVAC capability particularly to the OpenStudio application and the Measure ecosystem.
        <br/>- A number of bug fixes and performance improvements.<br/>
        <br/>Please see the <a href="https://github.com/NREL/OpenStudio/releases/tag/v1.9.0">release notes</a> for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'Check out our new feedback link!',
  time: '2015-8-18 12:24:15 -0600',
  html: `The EnergyPlus and OpenStudio webpages now include a "Feedback" link in the navigation bar. This takes you to a UserVoice site for capturing and voting on feature requests.`
}, {
  title: 'New single sign-on for EnergyPlus and OpenStudio',
  time: '2015-08-10 23:22:18 -0600',
  html: `In conjunction with the launch of a new feature voting site for both EnergyPlus and OpenStudio, OpenStudio.net will move to a single sign-on solution.
        Beginning August 10th,  your OpenStudio credentials will be transferred to the EnergyPlus.net site, and will allow you to login to both EnergyPlus.net and OpenStudio.net, as well as the feature voting sites.
        The BCL will also be moving to the same sign-on solution in the near future.  This change will simplify the login process by reducing the number of passwords you need to access these various tools.
        If you already have an OpenStudio.net account, you will not need to create a new account. When clicking on the ‘Log in’ button, you will be redirected to EnergyPlus.net, where you will enter your OpenStudio credentials.
        Upon a successful login, you will then be redirected back to OpenStudio.net. If you do not remember your password, click on the ‘Request New Password’ tab on the login page.`
}, {
  title: 'OpenStudio 1.8.0 Release',
  time: '2015-7-13 15:11:56 -0600',
  html: `OpenStudio 1.8.0 is now available for download from the OpenStudio website.<br/>
        Notable new features include:<br/>
        <br/>- The addition of many new HVAC objects to the OpenStudio Model, available through the OpenStudio API for use in measures as well as in the OpenStudio Application
        <br/>- The ability to import IFC into OpenStudio via BIMserver
        <br/>- A number of bug fixes and performance improvements.<br/>
        <br/>Please see the release notes for a complete list of new features and improvements. Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.7.0 Release',
  time: '2015-03-31 09:25:13 -0600',
  html: `OpenStudio 1.7.0 is now available for download from the OpenStudio website.<br/>
        Notable new features include:<br/>
        <br/>- The addition of multi-edit capability to grid views in the OpenStudio Application. Implemented for the Thermal Zone and Space Type tabs.
        <br/>- OpenStudio now supports Radiance 3-phase simulation of dynamic window shading controls.
        <br/>- The OS:WindowFrameAndDivider object was added to allow import of detailed Window properties from the LBNL WINDOW program.
        <br/>- A number of bug fixes and performance improvements.<br/>
        <br/>Please see the release notes for a complete list of new features and improvements.  Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'OpenStudio 1.6.0 Release',
  time: '2015-01-23 14:33:41 -0700',
  html: `OpenStudio 1.6.0 is now available for download from the OpenStudio website.
        <br/>Notable new features include:<br/>
        <br/>- Support for EnergyPlus version 8.2.0 and SketchUp 2015.
        <br/>- New standards specific properties for CEC Title 24 2013 support.
        <br/>- A number of bug fixes and performance improvements.<br/>
        <br/>Please see the release notes for a complete list of new features and improvements.  Videos demonstrating new features will be uploaded soon to our website and YouTube channel.`
}, {
  title: 'Supports EnergyPlus 8.2 Update 1',
  time: '2014-12-11 12:51:55 -0700',
  html: `OpenStudio 1.5.4 has just been released with support for <a href="https://github.com/NREL/EnergyPlus/releases/tag/v8.2.0-Update-1.2">EnergyPlus 8.2 update 1</a>`
}, {
  title: 'OpenStudio 1.4.0 Release',
  time: '2014-07-01 09:18:24 -0600',
  html: `<div>OpenStudio 1.4.0 is now available for download from the OpenStudio website. This is the first major release compatible with EnergyPlus 8.1. &nbsp;Notable new features include:</div>
        <div>&nbsp;</div>
        <ul style="margin-bottom: 10px; margin-left: 40px;">
        <li style="margin-bottom: 5px; line-height: 18px;">New functionality to apply measures directly to a model in the OpenStudio Application.</li>
        <li style="margin-bottom: 5px; line-height: 18px;">New template data sets for ASHRAE 90.1 2007 and 2010.</li>
        <li style="margin-bottom: 5px; line-height: 18px;">PAT export of a file compatible with the OpenStudio-analysis-spreadsheet project used for running large uncertainty or optimization analyses in the cloud.</li>
        <li style="margin-bottom: 5px; line-height: 18px;">New HVAC objects and performance improvements contributed by our partners at Oak Ridge National Laboratory.</li></ul>
        <div>&nbsp;</div>
        <div>Please see the release notes for a complete list of new features and improvements. &nbsp;Videos demonstrating new features will be uploaded soon to our website and YouTube channel.</div>`
}, {
  title: 'OpenStudio 1.3.0 Release',
  time: '2014-03-30 20:43:00 -0600',
  html: `<p>OpenStudio 1.3.0 is now available for download from the OpenStudio website. Development for OpenStudio 1.3.0 has two main focuses:</p>
        <ul>
            <li>Development continuation of the refrigeration interface and addition of new refrigeration model objects.
                This resulted in a new detailed component grid-view of refrigeration systems.
                The development was carried out with requirements gathering and guidance from practitioners.
                The new refrigeration objects include contributions from Oak Ridge National Laboratory.&nbsp;</li>
            <li>
                Enhancements of model objects and methods in support of a collection of Energy Conservation Measures.
                ECMs were developed to model the recommendations from both the ASHRAE 50% Advanced Energy Design Guide for K-12 Schools, and the ASHRAE 50% Advanced Energy Design Guide for Small to Medium Offices.
                The ECMs are posted to the Building Component Library (BCL) in conjunction with this OpenStudio release. In addition, ECM supporting material is included with the OpenStudio installer. This includes:
                <ul>
                    <li>A new multi-space type office template.</li>
                    <li>New objects to map constructions and space types to their intended uses.</li>
                    <li>New fenestration methods to describe view and daylight fenestration and skylights.</li>
                </ul>
            </li>
        </ul>
        <p>OpenStudio 1.3.0 supports EnergyPlus 8.0 along with a number of new HVAC components.</p>
        <p>Videos demonstrating new features will be uploaded soon to our website and YouTube channel.</p>`
}, {
  title: 'New OpenStudio Developer Mailing List',
  time: '2014-01-09 15:57:52 -0700',
  html: `<p>Join the OpenStudio Developer Mailing List for important announcements about changes to the OpenStudio APIs or build configurations. Visit the&nbsp;<a href="/developers">Developers</a>&nbsp;page to join the mailing list.</p>`
}, {
  title: 'OpenStudio 1.1.0 Release',
  time: '',
  html: `<p>OpenStudio 1.1.0 is now available for download from the OpenStudio website. This release adds support for manual calibration of simulation results from monthly utility data .
        A new reporting measure type was introduced that has access to input data and simulation results that can be used to create custom reports and to perform automated quality control checks.
        Another major new feature is simulation using cloud computing resources through Amazon EC2. Users first set up an account with Amazon and link it to OpenStudio.
        The ParametricAnalysisTool (PAT) can then be used to run simulations locally or on Amazon EC2.
        This feature is still under active development to improve process connection and performance, and users are strongly urged to carefully review all disclaimer text and provided EC2 monitor web links in the cloud configuration dialogs.</p>
        <p>OpenStudio 1.1.0 supports EnergyPlus 8.0 along with a number of new HVAC components.</p>
        <p>Videos demonstrating new features will be uploaded soon to our website and YouTube channel.</p>`
}, {
  title: 'OpenStudio is moving to GitHub',
  time: '2013-07-10 13:34:17 -0600',
  html: `<p>The OpenStudio source code repository has migrated from Subversion to Git, now hosted publicly at GitHub.com. &nbsp;The SVN repository is still available as read-only.
        &nbsp;For more information about collaborating on development with OpenStudio, please review the new developer resources for third-party collaborators:&nbsp;<a href="https://github.com/NREL/OpenStudio/wiki">https://github.com/NREL/OpenStudio/wiki</a></p>
        <p>Thanks for your patience through this transition.</p><p>The OpenStudio Team.</p>`
}, {
  title: 'OpenStudio 1.0.0 Release',
  time: '2013-07-05 10:38:03 -0600',
  html: `<p>OpenStudio 1.0.0 is now available for download from the OpenStudio website. This OpenStudio release adds life cycle cost objects to OpenStudio models and to energy conservation measures used in the Parametric Analysis Tool (PAT).
        In addition to being able to evaluate design alternatives based on energy use, users can now look at total life cycle costs, first year capital costs, annual utility savings, and simple payback.
        A new HVAC control view lets users set the operation time, night cycle operation, supply air temperature, economizer, and demand controlled ventilation for air loops.
        A major new category of HVAC equipment has been added with the introduction of an air to air heat recovery model, which can be used to model a variety of sensible and latent heat recovery devices.</p>
        <p>OpenStudio 1.0.0 supports EnergyPlus 7.2.</p>
        <p>Videos demonstrating new features will be uploaded soon to our website and YouTube channel.</p>`
}, {
  title: 'Early Registration deadline for OpenStudio training at the AIA Denver 2013 is April 10th',
  time: '2013-04-03 15:44:48 -0600',
  html: `<p>A full day workshop taught by OpenStudio developers will be offered on June 19<sup>th</sup>, 2013 as part of the AIA National Convention in Denver. The workshop will start in the SketchUp plugin where we will create the building envelope, internal geometry, and assign building activity.
        Then we will move into the standalone OpenStudio application to work on internal loads, schedules, and HVAC systems. Lastly, we will move into our new Parametric Analysis Tool that just came out in our 0.11.0 release to assign energy conservation measures to a baseline model and create various design alternatives.</p>
        <p>&nbsp;</p><p>No energy modeling experience is required, but familiarity with SketchUp will be helpful. <a href="http://eventscribe.com/2013/aia/TwitterPres.asp?pres=33379">Early registration ends on April 10th. Please register early to assure a spot.</a></p>`
}, {
  title: 'OpenStudio 0.11.0 Release',
  time: '2013-04-01 11:00:10 -0600',
  html: `<p>OpenStudio 0.11.0 is now available for download from the OpenStudio website. This OpenStudio release focuses on extensions to the SDK to enable a user-configurable parametric tool. The Parametric Analysis Tool (PAT) lets users modify a baseline OpenStudio model using OpenStudio measures to produce design alternatives.</p>
        <p>OpenStudio measures are specially formatted Ruby scripts and accompanying files for modifying energy models in OpenStudio or EnergyPlus format.
        A small library of measures is included in the installer; more measures are available for download from the <a href="https://bcl.nrel.gov/">Building Component Library</a>, and users can create their own measures by following the <a href="http://nrel.github.io/OpenStudio-user-documentation/measures/measure_writing_guide/">Measure Writing Guide</a>.
        In PAT, modifications to the baseline energy model are specified by selecting a measure and setting its argument values.
        Mutually exclusive choices (e.g. alternative values of the South fa&ccedil;ade window-to-wall ratio) are typically placed in a measure group to ensure that a design alternative&rsquo;s measures do not conflict with or overwrite each other.
        Design alternatives are specified by choosing 0-1 measures from each group. Users can debug their measures and other simulation steps by reviewing the detailed information on the simulation run tab.
        Upon successful simulation, summary energy metrics for each design alternative are reported on the results tab, where the final models may also be opened in the OpenStudio Application.</p>
        <p>OpenStudio 0.11.0 supports EnergyPlus 7.2.</p>
        <p>View the <a href="https://www.youtube.com/watch?v=3rmElK_OB28">YouTube videos</a> demonstrating the new Parametric Analysis Tool and measure writing.</p>`
}, {
  title: 'NREL seeking proposals for OpenStudio training and technical support',
  time: '2013-02-28 11:40:11 -0700',
  html: `<p>The National Renewable Energy Laboratory (NREL) is seeking proposals from qualified organizations and/or higher education institutions to provide:</p>
        <p>1. Instructor-led training on the use of the OpenStudio whole-building energy modeling software and SDK.</p>
        <p>2. User and technical support to OpenStudio users.</p>
        <p>NREL shall provide OpenStudio training modules and material to the appointed training organization(s) under a license agreement. NREL intends to award license agreements resulting from this solicitation to the most qualified proposals based on the criteria stated herein.
        Such license will be made available without charge to selected higher education institutions who intend to offer the training program in connection with a course for which college or university credit is available. All other organizations will be required to pay an annual upfront fee of US$2,500.</p>
        <p>Authorized OpenStudio trainers will be selected pursuant to the process described in this Announcement and will have access to detailed training curriculums developed by the NREL under the terms of the license agreement.
        The curriculum will be broken down into a series of modules allowing trainers to customize the training to the needs and experience level of the audience, as well as the time available for the class. Each module will have a detailed agenda, step by step instructions, and sample files.
        Some modules may also have a PowerPoint presentation that can be used to introduce an exercise.</p>
        <p><a href="https://www.fbo.gov/index?s=opportunity&amp;mode=form&amp;id=bbae6db5465c03b0dd92601b6f200e83&amp;tab=core&amp;_cview=1">Click here to view the full RFP</a>.</p>`
}, {
  title: 'Recorded Webinar: Green Building XML and the New EnergyPlus GUIs from LBNL and NREL',
  time: '2013-01-24 13:13:17 -0700',
  html: `<p>Watch a recording of the January 22, 2013&nbsp;<a href="https://vimeo.com/57962951">webinar</a>&nbsp;demonstrating OpenStudio and Symergy&#39;s gbXML workflows. The OpenStudio segment begins at around the 15-minute mark.</p>`
}, {
  title: 'OpenStudio 0.10.0 Release',
  time: '2012-12-20 09:30:39 -0700',
  html: `<p>OpenStudio 0.10.0 is now available for download from the OpenStudio website. This OpenStudio release focuses on a more robust and user friendly installation process, stability and performance improvements,&nbsp; and more control of simulation settings.</p>
        <p><br/>The OpenStudio installer now installs and configures Ruby and Perl for you. This allows you to use the Scripts tab in the OpenStudio application, without any additional installation and configuration.
        If you want to use Radiance, you only need to first install Radiance, and then scan for tools in the OpenStudio Application. The Simulation Settings tab in the Application now gives you much greater control of EnergyPlus&rsquo;s simulation settings.
        You can, for example, run partial year simulations, customize the heating and cooling sizing factors, change the number of timesteps per hour, control the number of warmup days, solar distribution, and more.
        &nbsp;Other notable additions to OpenStudio include the ability to add multiple pieces of HVAC equipment to a single zone, the ability to inspect and set zone sizing parameters, and improved importing of design days.</p>
        <p>OpenStudio 0.10.0 supports EnergyPlus 7.2.</p>`
}, {
  title: 'OpenStudio 0.9.0 Release',
  time: '2012-10-02 21:47:58 -0600',
  html: `<p>OpenStudio 0.9.0 is now available for download from the OpenStudio website.
        &nbsp;This OpenStudio release focuses on service hot water systems, construction and material editors, performance improvements, Radiance integration, and codebase development to support parametric analysis.</p>
        <p>With the addition of service hot water modeling, you can now simulate hot and cold water use throughout the building.&nbsp; Support for water-cooled chillers and cooling towers has also been added.
        &nbsp; The Building Component Library (BCL) integration in OpenStudio has been extended to include materials, in addition to constructions which it already supported.
        &nbsp; The constructions tab now has a drag and drop interface to add and remove material layers for a construction.&nbsp; Additionally, the materials tab lets you inspect and change material properties.
        &nbsp; A Radiance checkbox has been added to the <em>Run</em> tab, and a supporting glare sensor added to the SketchUp Plug-in.
        &nbsp; This checkbox allows you to integrate Radiance into your simulation without having to leave the application.&nbsp; You do need to install Radiance dependencies to enable this feature.
        &nbsp; API and codebase support has been added for more advanced parametric analysis and uncertainty quantification.</p>
        <p>The focus in the SketchUp Plug-in has been performance and stability.
        The inspector was updated to be render-mode aware, allowing the user to select constructions, space types, thermal zones, and story objects by switching to the appropriate render mode and then selecting a space or surface.
        &nbsp; Space naming for the diagram tool has been improved and a number of new sample user scripts added.</p>
        <p>OpenStudio 0.9.0 supports EnergyPlus 7.1.</p>`
}, {
  title: 'OpenStudio 0.8.1 Released',
  time: '2012-07-20 15:12:56 -0600',
  html: `<div class="content clearfix">
        <p>OpenStudio 0.8.1 is now available for download from the OpenStudio website. The OpenStudio version 0.8.1 release focuses on integration with the NREL Building Component Library (BCL) and EnergyPlus 7.1 support.
        The BCL is an online repository of building data used to create building energy models. The BCL can be accessed through a web API to search for and download data for use in energy modeling.
        In this release, the OpenStudio application has been extended to use this web API to enable searching, downloading, and using construction components from the BCL from within the OpenStudio application.
        OpenStudio 0.8.1 also includes a version translator to upgrade OSM and OSC files to the current version.</p>
        <p><a href="http://openstudio.nrel.gov/downloads">Download the 0.8.1 Release</a>&nbsp;or&nbsp;<a href="http://openstudio.nrel.gov/release-notes">read the release notes</a>.</p></div>`
}, {
  title: 'OpenStudio Contribution Policy',
  time: '2012-07-19 10:50:10 -0600',
  html: `<p>The OpenStudio Contribution Policy for external collaborators is now available.</p>
        <p><a href="/openstudio-contribution-policy">You can review the policy here</a>.</p>`
}, {
  title: 'Webinar: Whole-Building Energy Modeling: Reducing Modeling Time with the OpenStudio 0.8 User Interface and the Building Component Library',
  time: '2012-04-24 13:05:00 -0600',
  html: `<p>Date: Thursday, June 28, 10:00-11:30am MT</p>
        <p>Presenters:&nbsp;Nicholas Long and David Goldwasser of the National Renewable Energy Laboratory</p>
        <p>Learn about recent improvements to NREL and DOE&rsquo;s free open-platform energy modeling software, OpenStudio.
        This webinar will preview OpenStudio version 0.8, which features integration with the Building Component Library, an on-line repository of reusable components for rapid and consistent energy modeling.
        &nbsp;We will demonstrate a complete and easy-to-use modeling workflow using the OpenStudio SketchUp Plug-in and the stand alone OpenStudio application.</p>
        <p><a href="https://www.mymeetings.com/emeet/rsvp/index.jsp?customHeader=mymeetings&amp;Conference_ID=5416129&amp;passcode=6282631">Register for this webinar</a>.</p>`
}, {
  title: 'OpenStudio 0.7.0 Released',
  time: '2012-03-27 15:24:26 -0600',
  html: `<p>OpenStudio 0.7.0 is now available for download from the OpenStudio website. The OpenStudio version 0.7.0 release focuses on extensions to the SDK to enable a comprehensive, workflow-centric application that complements the SketchUp Plug-in.
        The new OpenStudio Application integrates SystemOutliner&rsquo;s functionality from release 0.6.0 and expands on its &quot;drag and drop&quot; paradigm for model resources.
        &nbsp;This capability will be integrated with the <a href="http://bcl.nrel.gov">Building Component Library</a>&nbsp;in the next major release (0.8.0) of OpenStudio. &nbsp;</p>
        <p>Other noteworthy features of the new application include:</p>
        <ul>
        <li>visual editing of schedules</li>
        <li>extensibility via the integration of user scripts into multiple points in the workflow</li>
        <li>a simulation results summary</li>
        <li>and support for IP units &nbsp;</li>
        </ul>
        <p><a href="http://openstudio.nrel.gov/downloads">Download the 0.7.0 Release</a>&nbsp;or&nbsp;<a href="http://openstudio.nrel.gov/release-notes">read the release notes</a>.</p>`
}, {
  title: 'OpenStudio 0.6.0 Released',
  time: '2012-12-22 18:23:12 -0700',
  html: `<p>OpenStudio 0.6.0 is now available for download from the OpenStudio website. The 0.6.0 release adds significant new features, some of which are highlighted below:</p>
        <ul style="margin-bottom: 10px; margin-left: 40px; ">
        <li style="margin-bottom: 5px; line-height: 18px; ">Support for EnergyPlus 7</li>
        <li style="margin-bottom: 5px; line-height: 18px; ">Template HVAC Systems for SystemOutliner</li>
        <li style="margin-bottom: 5px; line-height: 18px; ">Green Buillding XML (gbXML) import</li>
        <li style="margin-bottom: 5px; line-height: 18px; ">Initial integration with Building Component Library</li>
        <li style="margin-bottom: 5px; line-height: 18px; ">Annual climate-based Radiance simulations of spaces along with lighting schedules for EnergyPlus simulations</li></ul>
        <p><a href="http://openstudio.nrel.gov/downloads">Download the 0.6.0 Release</a>&nbsp;or&nbsp;<a href="http://openstudio.nrel.gov/release-notes">read the release notes</a>.</p>`
}, {
  title: 'Webinar: Designing and Modeling HVAC Systems with SystemOutliner ',
  time: '2011-11-29 15:39:03 -0700',
  html: `<p>Date: &nbsp;December 7, 2011 at 3:00 p.m. ET</p>
        <p>Presenter:&nbsp;Kyle Benne, National Renewable Energy Laboratory</p>
        <p>This webinar introduces a new software application, SystemOutliner, developed at NREL to facilitate the design and simulation of HVAC systems using EnergyPlus and OpenStudio.
        The key user features of SystemOutliner will be discussed, including the ability to assemble custom HVAC systems through a drag-and-drop interface and rapidly model common HVAC system types using built-in templates.
        SystemOutliner is designed to complement the more mature, geometry-focused features of OpenStudio; a demonstration will be given on how to integrate the new tool into the OpenStudio workflow.
        Time will be reserved to discuss the current feature set, as well as critical next steps in the development of the tool.</p>
        <p>The webinar is sponsored by the U.S. Department of Energy&#39;s Building Technologies Program. &nbsp;<a href="https://www.mymeetings.com/emeet/rsvp/index.jsp?customHeader=mymeetings&amp;Conference_ID=9044576&amp;passcode=3292518">Register for this webinar</a>.</p>
        <p><a href="https://www.mymeetings.com/emeet/rsvp/index.jsp?customHeader=mymeetings&amp;Conference_ID=9044576&amp;passcode=3292518">&nbsp;</a></p>`
}, {
  title: 'OpenStudio Release 09/30/2011',
  time: '2011-09-30 13:51:25 -0600',
  html: `<p>OpenStudio 0.5.0 is now available for download from the OpenStudio website. The 0.5.0 release adds significant new features, some of which are highlighted below:</p>
        <ul><li>Addition of space, space type, building story, and component definition/instance objects to the SketchUp Plug-in to better unite the architectural and thermal views of a project.</li>
        <li>New user scripts capability in the SketchUp Plug-in allows users to automate portions of their workflows using the OpenStudio and SketchUp Ruby APIs.</li>
        <li>SystemOutliner has expanded capabilities including the ability to import air systems from EnergyPlus Idf files.</li>
        <li>A Sequential Search optimization algorithm, which can operate on OpenStudio Models, EnergyPlus Idf, or a mixture of the two, has been added to the OpenStudio API and is available through Ruby scripting.</li></ul>
        <p><a href="/downloads">Download the 0.5.0 Release</a> or <a href="https://github.com/NREL/OpenStudio/tree/develop/doc/ReleaseNotes">read the release notes</a>.</p>`
}, {
  title: 'OpenStudio - Whole Building Energy Modeling presented by NREL\'s Nicholas Long and David Goldwasser',
  time: '2011-08-24 09:51:05 -0600',
  html: `<p>Wed 8/24/2011&nbsp; &nbsp;12:00pm (PT) / 1:00pm (MT) / 2:00pm (CT) / 3:00pm (ET)</p>
        <p>Are you curious about the newest free open-platform software product developed by NREL and DOE?
        OpenStudio&#39;s objective is to help design more energy efficient buildings, using an application suite that provides the tools needed to create energy models.
        OpenStudio has two distinct components: the Application Suite and the Software Development Platform.
        The focus of this talk will be on the application suite which is primarily used by architects, engineers and others involved in the design, construction, or facility management industries.
        This includes building and home owners who are considering retrofits to existing structures or design options for new construction.</p>
        <p><a href="http://apps1.eere.energy.gov/buildings/publications/pdfs/alliances/20110824_webinar_openstudio.pdf">View the presentation slides</a>,
        <a href="http://www1.eere.energy.gov/buildings/alliances/media/20110824_webinar_openstudio.wmv">view the recorded webinar</a>
        or&nbsp;<a href="http://www1.eere.energy.gov/buildings/alliances/webinar_openstudio_20110824_text.html"
        style="border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; outline-width: 0px;
        outline-style: initial; outline-color: initial; font-style: inherit; font-size: 13px; font-family: inherit; vertical-align: baseline; color: rgb(186, 79, 22); "
        target="_self">read a text version of the webinar audio</a>.</p>`
}, {
  title: 'OpenStudio Bootcamp',
  time: '2011-07-25 13:16:59 -0600',
  html: `<p>The OpenStudio development team hosted an OpenStudio Bootcamp in Golden, CO on July 18<sup>th</sup>&nbsp;and 19<sup>th</sup>. This was a two day workshop attended by software developers, researchers, and energy modelers.
        The focus of the bootcamp was on the OpenStudio development process, API functionality, scripting, and GUI creation. Below is a list of some of the topics discussed.</p>
        <ul class="rteindent1" style="margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 40px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; list-style-type: disc; ">
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Overview of OpenStudio architecture and project goals</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">OpenStudio development/build process and dependencies</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Model and Workspace paradigms and usage</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Components and forward/reverse translation</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Scripting with Ruby and C# SWIG bindings and the RunManager</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Demo and code walkthrough of the OpenStudio SketchUp Plug-in</li>
        <li style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 18px; ">Application examples including: perturbations, rule processing, and GUI building with PolicyAnalysisTool/SystemOutliner</li></ul>`
}, {
  title: 'OpenStudio Release 06/24/2011',
  time: '2011-06-27 15:09:47 -0600',
  html: `<p>DOE/NREL&rsquo;s newest version of OpenStudio suite of tools and SDK, Version 0.4.0, was released on June 24, 2011.
        &nbsp;&nbsp;Included in this release is a new Application called the Policy Analysis Tool as well as bug fixes and new features related to OpenStudio and its applications.
        See&nbsp;<a href="/downloads">Downloads</a>&nbsp;for further details.</p>`
}, {
  title: 'First Release of the OpenStudio Policy Anaysis Tool',
  time: '2011-06-27 15:06:40 -0600',
  html: `<p>The OpenStudio Policy Analysis Tool is an intuitive graphical user interface (GUI) that enables simple modeling and analysis by providing the ability to visually compare sets of perturbation results and evaluate those results against collections of standards rules.</p>`
}, {
  title: 'Energy Modeling for Retrofit Projects',
  time: '2011-06-27 15:05:33 -0600',
  html: `<p>Our new interactive <a href="http://www.youtube.com/watch?v=bSNQOEVl3mM&list=PLF80F250937E2A648">Retrofit Guide</a> is tied to online video tutorials and walks you through the steps necessary to create an energy model of your existing building.
        You can create a baseline simulation, model and run simulations for retrofit alternatives, and compare them against your baseline model.</p>`
}, {
  title: 'OpenStudio Release 12/16/2010',
  time: '2010-12-06 00:00:00 -0700',
  html: `<p>DOE/NREL&rsquo;s newest version of OpenStudio suite of tools and SDK, Version 0.3.0, was released on December 16, 2010.&nbsp;&nbsp;See&nbsp;
        <a href="https://openstudio.nrel.gov/downloads" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; text-decoration: none; color: rgb(39, 99, 140); ">Downloads</a>&nbsp;for further details.</p>`
}, {
  title: 'DOE Releases New Versions of Successful Energy Efficiency Modeling Software Programs',
  time: '2010-12-02 08:39:15 -0700',
  html: `<p>The U.S. Department of Energy (DOE) has released updated versions of its popular EnergyPlus simulation software and OpenStudio Plug-in for Google SketchUp, which help engineers and architects design better functioning, more energy-efficient buildings.
        <a href="http://www.facebook.com/note.php?note_id=10150095365675120&amp;id=226523555061&amp;ref=mf">Read more on Facebook</a>.</p>`
}, {
  title: 'OpenStudio Release 9/30/2010',
  time: '2010-09-30 10:16:53 -0600',
  html: `<p>The 9/30/2010 release version of the OpenStudio Suite (version 0.2.0) including an updated version of SketchUp Plug-in (version 1.1.0) is now available. See <a href="../downloads">Download Instructions</a> for further details.</p>`
}];
