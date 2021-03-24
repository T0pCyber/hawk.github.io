---
layout: page

---
# Documentation

Welcome to the documentation section, the central place to look for documentation on Hawk

## Setup

It is important that the account you will be using has the proper permissions in Azure Active Directory and Microsoft 365. The following are the minimum permissions you will need to successful run an investigation with Hawk.

1. Azure Active Directory
    - Global Reader
2. Exchange Online Admin Center. ***We recommend you create a new custom admin role.*** The following permissions need to be assigned to the group and the user that will be doing the investigation assigned to that group. If you don't want to create a custom group, you can also assign the user to ***Compliance Management*** or ***Organization Managment***. But that is a lot power.
    - User Options
    - View-Only Audit Log
    - View-Only Configuration
    - View-Only Recipients
    
Run all the following steps from PowerShell as Administrator

1. Run the following command to check the PowerShell version you are running. Hawk requires that you are running version 5 currently. Do not use a higher version at this time. There are bugs we need to work out.
    - `$PSVersionTable`

![PSVersionTable](/images/psversiontable.png)

2. Run the following to ensure you don't run into issues installing additional modules and running Hawk.
    - `Set-ExecutionPolicy RemoteSigned`
3. Run the following command to install the Hawk PowerShell module from the PowerShell Gallery.
    - `Install-Module -Name Hawk`
4. If you do not have the Exchange Online PowerShell V2 Module installed. We recommend using this version because it supports Modern Authentication.
    - `Install-Module -Name ExchangeOnlineManagement`
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

Once Hawk completes, it will produce multiple log files (csv, txt and xml) in the location you defined when running `Start-HawkTenantInvestigation`. The following is the breakdown of the log files created.

Log File | Location | Description
-------- | -------- | -----------
_Investigate | Hawk_{Date}_{Time} | Is a quick and dirty logfile of some suspicious stuff that you may want to start your investigation.
Hawk.log | Hawk_{Date}_{Time} | Copy of the output of the processes that was observed in the PowerShell command window.
YYYY-MM-DD_logs.csv | Hawk_{Date}_{Time} | Logfile of all the functions that were ran as part of the "Start-HawkTenantInvestigation".
_Investigate_Impersonation_Rights.csv | Hawk_{Date}_{Time}\Tenant | List all users with impersonation rights if we find more than the default of one.
_Investigate_Impersonation_Roles.csv | Hawk_{Date}_{Time}\Tenant | List all users with impersonation roles for users that have access if we find more than the default of one.
_Investigate_Simple_New_InboxRule.csv | Hawk_{Date}_{Time}\Tenant | Cmdlets to create inbox rules that forward or delete email in a simple format.
AdminAuditLogConfig.txt | Hawk_{Date}_{Time}\Tenant | Configuration of the Exchange admin audit log configuration.
ApplicationCertsAndSecrets.csv | Hawk_{Date}_{Time}\Tenant | Registered Applications Certificate and Password details.
Azure_Application_Audit.csv | Hawk_{Date}_{Time}\Tenant | Search the unified audit log for events related to application activity.
AzureADAdministrators.csv | Hawk_{Date}_{Time}\Tenant | Tenant Azure Active Directory Administrator export.
Consent_Grants.csv | Hawk_{Date}_{Time}\Tenant | Output of all consent grants.
EDiscoveryRoleAssignments.csv | Hawk_{Date}_{Time}\Tenant | All users that are assigned one of the discovered roles.
EDiscoveryRoles.csv | Hawk_{Date}_{Time}\Tenant | All roles that have access to the New-MailboxSearch and Search-Mailbox cmdlets.
ExchangeOnlineAdministrators.csv | Hawk_{Date}_{Time}\Tenant | Exports Exchange Admins.
Forwarding_Recipients.csv | Hawk_{Date}_{Time}\Tenant | List of unique Email addresses that were setup to receive email via forwarding.
Impersonation_Rights.csv | Hawk_{Date}_{Time}\Tenant | List all users with impersonation rights if we only find the default one.
Impersonation_Roles.csv | Hawk_{Date}_{Time}\Tenant | List all users with impersonation roles for users that have access  if we only find the default one.
OrgConfig.txt | Hawk_{Date}_{Time}\Tenant | Configuration data for an Exchange organization.
RBAC_Changes.csv | Hawk_{Date}_{Time}\Tenant | All RBAC changes in Raw format.
RemoteDomain.csv | Hawk_{Date}_{Time}\Tenant | Configuration information for the remote domains configured in your organization.
Simple_Forwarding_Changes.csv | Hawk_{Date}_{Time}\Tenant | Cmdlets that change forwarding settings in a simple to read format.
Simple_Mailbox_Permissions.csv | Hawk_{Date}_{Time}\Tenant | Cmdlets that add permissions to users in a simple to read format.
Simple_New_InboxRule.csv | Hawk_{Date}_{Time}\Tenant | Cmdlets to create any new inbox rules in a simple to read format.
Simple_RBAC_Changes.csv | Hawk_{Date}_{Time}\Tenant | All RBAC cmdlets that were run in an easy to read format.
SPNCertsAndSecrets.csv | Hawk_{Date}_{Time}\Tenant | Service Principal Certificate and Password details.
TransportConfig.csv | Hawk_{Date}_{Time}\Tenant | Organization-wide transport configuration settings.
TransportRules.csv | Hawk_{Date}_{Time}\Tenant | Transport rules (mail flow rules) in your organization.


## Hunting

## References

[About the Exchange Online PowerShell V2 Module](https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps)

