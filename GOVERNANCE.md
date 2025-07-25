# Governance

## Glossary

* **Advisory Committee (AC).**  A group of people with representation from a variety of GeoDa AI's constituencies including Users, End-users and Collaborators who provide advice to the Technical Steering Committee.

* <strong id=facilitator>Facilitator.</strong>  A member of a governance body who is responsible for facilitating the consensus-based decision making process and acting as a representative to other governance bodies.

* <strong id=governance-body>Governance body</strong> Any of the Advisory Committee, Technical Steering Committee, and Working Groups.

* <strong id=user>Users.</strong> Developers who use GeoDa AI libraries but haven't contributed to them (yet).

* <strong id=end-user>End-users</strong>. People who consume spatial data analysis tools and AI assistants built using GeoDa AI libraries.

* **Technical Steering Committee (TSC).**  A group of people who set GeoDa AI's technical & product direction.

* <strong id=wg>Working Groups (WG)</strong>.  A group of people who have a familiarity and interest in a given area; may be cross-cutting (e.g. "Documentation") or focused on a given area (e.g. "Spatial Analysis" or "AI Integration"). These are formally recognized by the TSC, but may form informally.

## Governance Structures

### Advisory Committee (AC)

#### Role

The Advisory Committee provides perspective and advice to the Technical Steering Committee. This advice is non-binding.

#### Membership
* Membership on the Advisory Committee shall include representatives from major GeoDa AI constituencies (Collaborators, Contributors, Users and End-Users) who are committed to fulfilling [GeoDa AI's vision and mission](https://github.com/geodaai/geodaai.github.io/blob/main/CHARTER.md#section-0-guiding-principles-optional).
* Membership on the Advisory Committee is not time limited.
* The target size of the Advisory Committee is 3-6 members, but there is no fixed size.
* Once established the Advisory Committee sets its own membership through the consensus-based process.
* No more than ⅓ of the Advisory Committee should be from one employer.
* The Advisory Committee will designate a Facilitator from among its members for the purposes of facilitating the consensus-based decision-making process.

### Technical Steering Committee (TSC)

#### Role

* Technical leadership of the GeoDa AI project is delegated to the TSC by the OpenJS Cross Project Council (CPC) in accordance with the [GeoDa AI Charter](https://github.com/geodaai/geodaai.github.io/blob/main/CHARTER.md).
* The TSC's primary role is setting GeoDa AI's technical & product direction based on the project's vision of empowering the AI era with powerful, accessible geospatial tools.
* Creates a product roadmap in consultation with the Working Groups.
* Creates Working Groups and sets the initial membership & initial Facilitator of the Working Groups.  The TSC may initiate the creation of Working Groups or a group of people with a common interest may request recognition as a Working Group.
* Approves new Collaborators.
* Sets and maintains the project guidelines.
* Sets and maintains the project's feature and bug fix process.
* Enforces the Code of Conduct.
* Approves changes to the GeoDa AI Charter and this document in coordination with the OpenJS CPC as described in the [GeoDa AI Charter](https://github.com/geodaai/geodaai.github.io/blob/main/CHARTER.md).
* The TSC may designate entities to perform security and privacy reviews of GeoDa AI code/features.
* The TSC may escalate legal questions to the Foundation. 
* Decisions within the TSC follow the decision-making policy, and are facilitated by the Facilitator or their designate.

#### Membership

* The TSC shall be composed of members with significant experience contributing to GeoDa AI on a technical and product level.
* Membership on the TSC is not time-limited.
* The target size of the TSC is 3-6 members, but there is no fixed size.
* Once established the TSC sets its own membership through the consensus-based process.
* The TSC shall have a goal of having no more than ⅓ of the TSC from one employer.  Given the requirement that membership in the TSC requires recognized technical and/or product experience with GeoDa AI this may not be feasible at the time the TSC is formed, but the TSC should actively work towards this goal.
* Entities (such as a company) may be granted seats on the TSC.  In these cases certain conditions may be placed on the seat (such as maintaining committed resources to the project). The entity may designate the individual representing the entity at the TSC and may change this individual at their discretion.
* The TSC will designate a Facilitator from among its members for the purposes of facilitating the consensus-based decision-making process.

### Working Groups

#### Role
* A Working Group is a segment of the community with knowledge/interest in specific areas of GeoDa AI (e.g. Spatial Analysis, AI Integration, UI/UX, Infrastructure, documentation) recognized by the TSC.
* The TSC defines each Working Group's mandate, which may include responsibility for certain GeoDa AI features, systems and/or code.  A Working Group generally operates independently on the area(s) in which it has a mandate while adhering to GeoDa AI's project guidelines, vision/mission and technical/product roadmaps.
* Each Working Group is made up of a set of Collaborators with knowledge/interest in that particular area + other interested parties.
* Each Working Group's Facilitator is responsible for:
    * Facilitating consensus-based decisions within the Working Group.
    * Representing the Working Group to the TSC.
    * Choosing designate(s) from within the Working Group for these responsibilities as needed.
* Decisions within Working Groups follow the decision-making policy, and are facilitated by the Facilitator or their designate.

#### Membership
* The TSC creates Working Groups and assigns initial members.  Membership should include some Committers but may include other interested parties.
* A Working Group may add or remove members and change the Facilitator by using the consensus-based approach.
* It is acceptable & expected that groups of people with a common interest will work together without requiring a formal Working Group.  These groups may choose to be officially recognized as a Working Group by making a proposal (including its purpose and proposed membership) to the TSC.
* The TSC may disband/reorganize Working Groups as needed.

## Decision making policy

* Decisions in GeoDa AI's Advisory Committee, TSC and Working Groups should be made using a [consensus-based approach](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) (similar to the [approach used by Node.js](https://nodejs.org/en/about/governance/#consensus-seeking-process) and [JS Foundation](https://github.com/JSFoundation/TAC/blob/master/TAC-Charter.md#section-8-decision-making)).
  * When discussions have appeared to reach a consensus, the Facilitator will ask if there are any objections to the apparent consensus.  A member may call a vote to finalize a decision, but this should only happen as a last resort.  With the agreement of two other members of the group the vote will be held, otherwise the consensus-seeking process will continue.
  * When votes are called:
    * The vote should be set at a time that allows a reasonable amount of time for those in the group to attend.  This time should be announced publicly.
    * Anyone who is unable to attend at the time of the vote can register their vote early.
    * They will be simple majority votes except for changes to Advisory Committee or TSC membership which requires a ⅔ vote.
  * For decisions made within a Working Group every effort should be made to resolve issues within the Working Group itself; issues that cannot be resolved within the Working Group may be escalated to the TSC.

* Decisions made by the Advisory Committee, TSC and Working Groups must be publicly documented (unless they cannot be for legal or security reasons).

* Decisions should be made through asynchronous communication channels. In the case where they are not—such as over video conference or during face to face meetings—a reasonable period of time should be allowed for objections to be made before the decision is ratified.

* A decision may be revisited if new technical information becomes available.

* The Advisory Committee, TSC and Working Groups may hold calls, video conferences, and face to face meetings. These meetings shall be announced sufficiently in advance with a published agenda. A mechanism by which the community can propose items for the agenda shall be provided.

## Developer Certificate of Origin

* The GeoDa AI Project uses the [Developer Certificate of Origin (DCO)](https://developercertificate.org/) to ensure that contributors have the right to submit their contributions to the project.

* All Owners, Collaborators, and Contributors who open a pull request must sign their commits using the DCO process by adding a `Signed-off-by` line to their commit messages.

* To sign your commits, add the following line to your commit message:
  ```
  Signed-off-by: Your Name <your.email@example.com>
  ```
  You can also use `git commit -s` to automatically add the sign-off line.

* TSC members are required to sign their commits using DCO when contributing to the project.

* AC members aren't formally required to sign commits using DCO, but will be required to do so should they decide to contribute to the project (for example by contributing code, documentation, specifications, or design documents) in a way where securing IP commitments is important to keep the project open source and royalty free.
