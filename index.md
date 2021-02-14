---
layout: default
title: Hawk Forensics
---
## Welcome to Hawk Forensics Pages
<img src="https://i.ibb.co/3cPMTM1/Hawk-2.png" alt="Hawk"
	title="Cyber Hawk" width="300" height="200" />

#  Purpose
The Hawk PowerShell module has been designed to ease the burden on M365 security people who are performing a forensic analysis in their organization.

It does NOT take the place of a human reviewing the data generated and is simply here to make data gathering easier.
#  What Hawk is and isn't
Hawk provides limited analysis of the gathered data from M365 and Azure Active Directory. This is by design! Hawk is here to help get all of the data in a single place it is not designed to make any significant conclusions about this data. This is intentional since it is impossible for the tool to know enough about your environment or what you are concerned about to make a legitimate analysis of the data.

Hawk's goal is to quickly get you the data that is needed to come to a conclusion; not to make the conclusion for you. We've structured the exported data in a manner of which can help analysts quickly triage known malicious Indicators Of Compromise (IOC) but again is NOT an all exhaustive list.

# How to use
Hawk is divided into two primary forms of cmdlets; user based Cmdlets and tenant based cmdlets.

User based cmdlets take the form Verb-HawkUser. They all expect a -user switch and will retrieve information specific to the user that is specified. Tenant based cmdlets take the form Verb-HawkTenant. They don't need any switches and will return information about the whole tenant.

Some of the Hawk cmdlets will flag results that should be further reviewed. These will appear in _Investigate files. These are NOT indicative of unwanted activity but are simply things that should reviewed.

For more detailed instructions please continue to the [Documention](documentation.md) page.
# Disclaimer
Hawk is NOT an official MICROSOFT tool. Therefore use of the tool is covered exclusively by the license associated with this [github](https://github.com/T0pCyber/hawk/blob/master/LICENSE) repository.