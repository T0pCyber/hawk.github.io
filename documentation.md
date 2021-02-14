﻿
# Documentation

Welcome to the documentation section, the central place to look for documentation on Hawk

## Setup

It is important that the account you will be using has the proper permissions in Azure Active Directory and Microsoft 365. The following are the minimum permissions you will need to successful run an investigation with Hawk.

1. Azure Active Directory
    - Global Reader
2. Exchange Online Admin Center. ***We recommend you create a custom group.*** The following permissions need to be assigned to the group or the user that will be doing the investigation. If you don't want to create a custom group, you can also assign the user to ***Compliance Management*** or ***Organization Managment***. But that is a lot power.
    - View-Only Audit Log
    
Run all the following steps from PowerShell as Administrator

1. Run the following command to check the PowerShell version you are running. Hawk requires that you are running version 5 currently. Do not use a higher version at this time. There are bugs we need to work out.
`$PSVersionTable`
2. Run the following command to install the Hawk PowerShell module from the PowerShell Gallery.
`Install-Module -Name Hawk`
3. If you do not have the Exchange Online PowerShell V2 Module installed. We recommend using this version because it supports Modern Authentication.
    - `Install-Module -Name ExchangeOnlineManagement`
    - `Set-ExecutionPolicy RemoteSigned`
    - `Import-Module ExchangeOnlineManagement`

## Implementation

### Logins

It is best to log into all the Azure/M365 services before running any of the Hawk scripts. Run the following commands to successfully set your environment for investigation.

1. Run the following command to access the cmdlets for Azure Active Directory using an authenticated account.
`Connect-AzureAD`
2. Run the following command to access the cmdlets for Microsoft 365 using an authenticated account. This command actually connects to Azure Active Directory again, but exposes the additional cmdlets. 
`Connect-MsolService`
3. Run the following command to access the cmdlets for Microsoft Exchange Online. As stated previously, the Exchange Online PowerShell V2 Module is recommended.
`Connect-ExchangeOnline` If you did not install V2, run `Connect-Exo`

### Run Hawk to do Initial Investigation

1. Run the following command to start your initial investigation with Hawk
`Start-HawkTenantInvestigation`
    - Accept Disclaimer
    - Set Output Directory
    - First Day of Search Window (1-90 days)
    - Last Day of Search Window (1-90 days)

### Log File Breakdown

Once Hawk completes, it will produce multiple log files (csv) in the location you defined when running `Start-HawkTenantInvestigation`. The following is the breakdown of the log files created.

Log File | Location | Description
-------- | -------- | -----------
_Investigate | Hawk_{Date}_{Time} | Is a quick and dirty logfile of some suspicious stuff that you may want to start your investigation.
Hawk.log | Hawk_{Date}_{Time} | Copy of the output of the processes that was observed in the PowerShell command window.
YYYY-MM-DD_logs.csv | Hawk_{Date}_{Time} | Logfile of all the functions that were ran as part of the "Start-HawkTenantInvestigation".
AdminAuditLogConfig.txt | Hawk_{Date}_{Time}\Tenant |Exchange Admin Audit Log Settings
AzureADAdministrators.csv | Hawk_{Date}_{Time}\Tenant |
Consent_Grants.csv | Hawk_{Date}_{Time}\Tenant |
EDiscoveryRoleAssignments.csv | Hawk_{Date}_{Time}\Tenant |
EDiscoveryRoles.csv | Hawk_{Date}_{Time}\Tenant |
ExchangeOnlineAdministrators.csv | Hawk_{Date}_{Time}\Tenant |
Impersonation_Rights.csv | Hawk_{Date}_{Time}\Tenant |
Impersonation_Roles.csv | Hawk_{Date}_{Time}\Tenant |
OrgConfig.txt | Hawk_{Date}_{Time}\Tenant | Exchange Online Organization Settings.
RBAC_Changes.csv | Hawk_{Date}_{Time}\Tenant |
RemoteDomain.csv | Hawk_{Date}_{Time}\Tenant |
Simple_Mailbox_Permissions.csv | Hawk_{Date}_{Time}\Tenant |
Simple_RBAC_Changes.csv | Hawk_{Date}_{Time}\Tenant |
TransportConfig.csv | Hawk_{Date}_{Time}\Tenant |

## Hunting

## References

[About the Exchange Online PowerShell V2 Module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps)
