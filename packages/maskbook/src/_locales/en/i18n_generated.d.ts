export function useMaskI18N(): {
    /** `About` */
    about(): string
    /** `Mask Network is a portal to the new, open Internet. With Mask Network, you can send encrypted posts to your friends, participate in cryptocurrency lucky-draws, and share encrypted files on the platforms you are already using.` */
    about_dialog_description(): string
    /** `Get in touch` */
    about_dialog_touch(): string
    /** `Feedback: ` */
    about_dialog_feedback(): string
    /** `Source Code: ` */
    about_dialog_source_code(): string
    /** `License: ` */
    about_dialog_license(): string
    /** `{{error}}
This public key won't be saved in Mask.` */
    add_to_key_store_failed_text(options: { error: string }): string
    /** `The public key is NOT verified` */
    add_to_key_store_failed_title(): string
    /** `The public key has been added to the Keystore` */
    add_to_key_store_success(): string
    /** `The public key has been found, verifying…` */
    add_to_key_store_verifying(): string
    /** `Add Token` */
    add_token(): string
    /** `Search Tokens` */
    add_token_search_hint(): string
    /** `Decrypt this post with #mask_io ! {{encrypted}}` */
    additional_post_box__encrypted_post_pre(options: { encrypted: string }): string
    /** `This image is encrypted with #mask_io. 📪🔑 Install mask.io to decrypt it. {{random}}` */
    additional_post_box__steganography_post_pre(options: { random: string }): string
    /** `Paste manually` */
    auto_paste_failed_dialog_title(): string
    /** `Please copy the following text and image (if there is any) and publish it` */
    auto_paste_failed_dialog_content(): string
    /** `Open in a new tab` */
    auto_paste_failed_dialog_image_caption(): string
    /** `Do you need to paste encrypted content manually?` */
    auto_paste_failed_snackbar(): string
    /** `Show me how` */
    auto_paste_failed_snackbar_action(): string
    /** `Please click the “Post” button to open the compose dialog.` */
    automation_request_click_post_button(): string
    /** `New avatar URL` */
    new_avatar_url(): string
    /** `Leave it blank means no change` */
    new_avatar_url_placeholder(): string
    /** `Backup` */
    backup(): string
    /** `Backup Database` */
    backup_database(): string
    /** `Backup Your Persona` */
    backup_persona(): string
    /** `Backup Wallet` */
    backup_wallet(): string
    /** `Cancel` */
    cancel(): string
    /** `Add an encrypted comment…` */
    comment_box__placeholder(): string
    /** `Confirm` */
    confirm(): string
    /** `Copy text` */
    copy_text(): string
    /** `Copy image` */
    copy_image(): string
    /** `Copy wallet address successfully!` */
    copy_success_of_wallet_addr(): string
    /** `Copy text successfully!` */
    copy_success_of_text(): string
    /** `Copy image successfully!` */
    copy_success_of_image(): string
    /** `Connect to` */
    connect_to(): string
    /** `Connecting…` */
    connecting(): string
    /** `Contacts` */
    contacts(): string
    /** `Groups` */
    groups(): string
    /** `Create` */
    create(): string
    /** `Create a Persona` */
    create_a_persona(): string
    /** `Create Persona` */
    create_persona(): string
    /** `Creating…` */
    creating(): string
    /** `Dashboard` */
    dashboard(): string
    /** `Ok, Back it up` */
    dashboard_backup_database_confirmation(): string
    /** `Create a database backup file. Do it regularly.` */
    dashboard_backup_database_hint(): string
    /** `You can backup your persona in the following options.` */
    dashboard_backup_persona_hint(): string
    /** `Do you want to delete the persona {{name}}? This operation cannot be reverted.` */
    dashboard_delete_persona_confirm_hint(options: { name: string }): string
    /** `Do you want to disconnect {{profile}} on {{network}} from the persona {{persona}}? This operation cannot be reverted.` */
    dashboard_disconnect_profile_hint(options: { profile: string; network: string; persona: string }): string
    /** `Restore from a previous database backup.` */
    dashboard_import_database_hint(): string
    /** `Fail to load dashboard.` */
    dashboard_load_failed_title(): string
    /** `Join Tests for Mobile` */
    dashboard_mobile_test(): string
    /** `https://mask.io/download-links/#mobile` */
    dashboard_mobile_test_link(): string
    /** `Paste the Base64 here…` */
    dashboard_paste_database_base64_hint(): string
    /** `Paste the database backup as text here…` */
    dashboard_paste_database_backup_hint(): string
    /** `You can import a persona backup in the following ways.` */
    dashboard_persona_import_dialog_hint(): string
    /** `Restored from a backup at {{time}}` */
    dashboard_restoration_successful_hint(options: { time: string }): string
    /** `Source Code` */
    dashboard_source_code(): string
    /** `https://github.com/DimensionDev/Maskbook` */
    dashboard_source_code_link(): string
    /** `info@dimension.im` */
    dashboard_email_address(): string
    /** `GNU AGPL 3.0` */
    dashboard_license(): string
    /** `Followers of {{owner}}` */
    database_group_followers_name(options: { owner: string }): string
    /** `Followed by {{owner}}` */
    database_group_following_name(options: { owner: string }): string
    /** `Friends of {{owner}}` */
    database_group_friends_default_name(options: { owner: string }): string
    /** `Append recipients` */
    decrypted_postbox_add_recipients(): string
    /** `Mask decrypting…` */
    decrypted_postbox_decrypting(): string
    /** `Mask decoding…` */
    decrypted_postbox_decoding(): string
    /** `Mask is looking for the public key of the author…` */
    decrypted_postbox_decrypting_finding_person_key(): string
    /** `Mask is retrieving the post key to decrypt this post…` */
    decrypted_postbox_decrypting_finding_post_key(): string
    /** `Originally posted by {{name}}` */
    decrypted_postbox_author_mismatch(options: { name: string }): string
    /** `Decrypted by Mask:` */
    decrypted_postbox_title(): string
    /** `Dismiss` */
    dismiss(): string
    /** `Delete` */
    delete(): string
    /** `Delete Contact` */
    delete_contact(): string
    /** `Delete Persona` */
    delete_persona(): string
    /** `Delete Wallet` */
    delete_wallet(): string
    /** `Hide Token` */
    hide_token(): string
    /** `Disconnect Profile` */
    disconnect_profile(): string
    /** `Done!` */
    done(): string
    /** `Download` */
    download(): string
    /** `Email` */
    email(): string
    /** `Error` */
    error_wallet(): string
    /** `You have no wallet currently. Create or Import one before doing that.` */
    error_no_wallet(): string
    /** `Error occurred when invoking the smart contract.` */
    error_gas_feed_exceeds(): string
    /** `Your allowance in this wallet is not sufficient to do that.` */
    error_insufficient_balance(): string
    /** `Unknown Error.` */
    error_unknown(): string
    /** `Feedback` */
    feedback(): string
    /** `Fingerprint` */
    fingerprint(): string
    /** `Activity` */
    activity(): string
    /** `Inbound` */
    activity_inbound(): string
    /** `Outbound` */
    activity_outbound(): string
    /** `Buy` */
    buy(): string
    /** `Buy Now` */
    buy_now(): string
    /** `[Optional]` */
    setup_guide_optional(): string
    /** `Find your username` */
    setup_guide_find_username_title(): string
    /** `Connect` */
    setup_guide_connect_auto(): string
    /** `Failed… Please try it again.` */
    setup_guide_connect_failed(): string
    /** `Create Now` */
    setup_guide_create_post_auto(): string
    /** `Failed… Please add it to the compose box manually.` */
    setup_guide_create_post_failed(): string
    /** `Say hello to everyone!` */
    setup_guide_say_hello_title(): string
    /** `Create your first post via Mask.` */
    setup_guide_say_hello_primary(): string
    /** `You need to publish posts via Mask frequently to allow others to encrypt their posts for you.` */
    setup_guide_say_hello_secondary(): string
    /** `Hello, Mask!` */
    setup_guide_say_hello_content(): string
    /** `Import` */
    import(): string
    /** `Import Failed` */
    import_failed(): string
    /** `Import Wallet` */
    import_wallet(): string
    /** `Import Your Persona` */
    import_your_persona(): string
    /** `Internal ID` */
    internal_id(): string
    /** `Keywords` */
    keywords(): string
    /** `English` */
    language_en(): string
    /** `中文` */
    language_zh(): string
    /** `日本語` */
    language_ja(): string
    /** `Mnemonic Words` */
    mnemonic_words(): string
    /** `My Personas` */
    my_personas(): string
    /** `My Wallets` */
    my_wallets(): string
    /** `Name` */
    name(): string
    /** `Nickname` */
    nickname(): string
    /** `No result` */
    no_search_result(): string
    /** `Not available` */
    not_available(): string
    /** `OK` */
    ok(): string
    /** `Password` */
    password(): string
    /** `Copy to clipboard` */
    copy_to_clipboard(): string
    /** `This post seems to be corrupted. Mask cannot decrypt it.` */
    payload_bad(): string
    /** `This post is incomplete. You need to view the full post to decrypt it.` */
    payload_incomplete(): string
    /** `Payload not found.` */
    payload_not_found(): string
    /** `Support for Alpha41 is deprecated. Tell your friends to upgrade Mask!` */
    payload_throw_in_alpha41(): string
    /** `All people recorded in the Mask database.` */
    people_in_database(): string
    /** `{{name}} ({{count}} in the group)` */
    person_or_group_in_chip(options: { name: string; count: string }): string
    /** `This is an empty group` */
    person_or_group_in_list_0(): string
    /** `{{people}}… {{count}} in total` */
    person_or_group_in_list_many(options: { people: string; count: string }): string
    /** `{{count}} in total` */
    person_or_group_in_list_many_no_preview(options: { count: string }): string
    /** `Personas` */
    personas(): string
    /** `Mask is lacking permission to work.` */
    popup_missing_permission(): string
    /** `Fix it` */
    popup_request_permission(): string
    /** `Current Persona` */
    popup_current_persona(): string
    /** `Enter Dashboard` */
    popup_enter_dashboard(): string
    /** `Connect Wallet` */
    popup_connect_wallet(): string
    /** `Setup First Persona` */
    popup_setup_first_persona(): string
    /** `Profiles` */
    profiles(): string
    /** `Posts` */
    posts(): string
    /** `Finish` */
    post_dialog__button(): string
    /** `Dismiss the compose dialog` */
    post_dialog__dismiss_aria(): string
    /** `Image Payload` */
    post_dialog__image_payload(): string
    /** `More Options` */
    post_dialog__more_options_title(): string
    /** `Text goes here…` */
    post_dialog__placeholder(): string
    /** `Myself` */
    post_dialog__select_recipients_only_myself(): string
    /** `Everyone` */
    post_dialog__select_recipients_share_to_everyone(): string
    /** `Select Recipients` */
    post_dialog__select_recipients_title(): string
    /** `Extra Specific Contacts ({{selected}} selected)` */
    post_dialog__select_specific_friends_title(options: { selected: string }): string
    /** `Mask: Compose` */
    post_dialog__title(): string
    /** `Compose encrypted post` */
    post_modal_hint__button(): string
    /** `Mask` */
    post_substitute_label(): string
    /** `Privacy Policy` */
    privacy_policy(): string
    /** `https://legal.mask.io/maskbook/` */
    privacy_policy_link(): string
    /** `Private key` */
    private_key(): string
    /** `Rename Persona` */
    persona_rename(): string
    /** `Persona Name` */
    persona_name(): string
    /** `QR Code` */
    qr_code(): string
    /** `Reload` */
    reload(): string
    /** `Hide` */
    hide(): string
    /** `Rename` */
    rename(): string
    /** `Reset` */
    reset(): string
    /** `Restore Database` */
    restore_database(): string
    /** `File` */
    restore_database_file(): string
    /** `Text` */
    restore_database_text(): string
    /** `Drag database backup into this dialog…` */
    restore_database_dragging(): string
    /** `Choose a file or drag it here.` */
    restore_database_dragged(): string
    /** `Drag QR code image backup into this dialog…` */
    restore_database_advance_dragging(): string
    /** `Choose an image or drag it here.` */
    restore_database_advance_dragged(): string
    /** `Save` */
    save(): string
    /** `Search` */
    search(): string
    /** `Search Contact` */
    search_contact(): string
    /** `Type here to search` */
    search_box_placeholder(): string
    /** `Select All` */
    select_all(): string
    /** `Select None` */
    select_none(): string
    /** `Done` */
    select_specific_friends_dialog__button(): string
    /** `Select Specific Contacts` */
    select_specific_friends_dialog__title(): string
    /** `Decryption failed.` */
    service_decryption_failed(): string
    /** `This does not seem like a backup of Mask.` */
    service_invalid_backup_file(): string
    /** `Mask does not find the post key. This post may not be intended to share with you.` */
    service_not_share_target(): string
    /** `The public key of {{name}} cannot be found!` */
    service_others_key_not_found(options: { name: string }): string
    /** `Failed to publish the AES key!` */
    service_publish_post_aes_key_failed(): string
    /** `Decryption failed. Maybe you selected a wrong identity or imported a key that was not used to encrypt this post.` */
    service_self_key_decryption_failed(): string
    /** `Decode image failed.` */
    service_decode_image_payload_failed(): string
    /** `Unknown post version. You may need to update Mask.` */
    service_unknown_payload(): string
    /** `Invalid Username` */
    service_username_invalid(): string
    /** `or` */
    set_up_tip_or(): string
    /** `Next` */
    set_up_button_next(): string
    /** `Restore From Backup` */
    set_up_button_from_backup(): string
    /** `Start From Scratch` */
    set_up_button_from_scratch(): string
    /** `Restore` */
    set_up_button_restore(): string
    /** `Advance…` */
    set_up_button_advance(): string
    /** `Finish` */
    set_up_button_finish(): string
    /** `Import` */
    set_up_button_import(): string
    /** `Confirm` */
    set_up_button_confirm(): string
    /** `Done` */
    set_up_button_done(): string
    /** `Cancel` */
    set_up_button_cancel(): string
    /** `Get Started` */
    set_up_button_get_started(): string
    /** `Welcome to Mask` */
    set_up_consent_data_collection(): string
    /** `Mask will collect some data when you use it, but the developers of Mask have no access to them. The collected data are stored locally, except for the data which are necessary for enabling your friends to decrypt the posts you shared.` */
    set_up_consent_data_collection_hint(): string
    /** `I agree with the ` */
    set_up_consent_data_collection_privacy_policy_1(): string
    /** `privacy policy` */
    set_up_consent_data_collection_privacy_policy_2(): string
    /** `.` */
    set_up_consent_data_collection_privacy_policy_3(): string
    /** `Getting Started` */
    set_up_create_persona(): string
    /** `You may connect social network profiles to your persona in the next step.` */
    set_up_create_persona_hint(): string
    /** `Connect a Social Network Profile for "{{name}}"` */
    set_up_connect(options: { name: string }): string
    /** `Now Facebook and Twitter are supported.` */
    set_up_connect_hint(): string
    /** `Restore Database` */
    set_up_restore(): string
    /** `Restore from a previous database backup.` */
    set_up_restore_hint(): string
    /** `Restore Failed` */
    set_up_restore_fail(): string
    /** `Advanced Restoration Options` */
    set_up_advance_restore(): string
    /** `You can import a persona backup in the following ways.` */
    set_up_advance_restore_hint(): string
    /** `Restore Failed` */
    set_up_advance_restore_fail(): string
    /** `Restore Database` */
    set_up_restore_confirmation(): string
    /** `The following data will be imported.` */
    set_up_restore_confirmation_hint(): string
    /** `Scan QR Code` */
    set_up_qr_scanner_title(): string
    /** `Fail to scan QR code` */
    set_up_qr_scanner_fail(): string
    /** `Backup Failed` */
    set_up_backup_fail(): string
    /** `Settings` */
    settings(): string
    /** `Ancient Post Compatibility Mode` */
    settings_ancient_post_compatibility_mode(): string
    /** `Enable if you need to decrypt ancient posts (created before Jan 2020).` */
    settings_ancient_post_compatibility_mode_desc(): string
    /** `Debug Mode` */
    settings_enable_debug(): string
    /** `See additional information for debugging.` */
    settings_enable_debug_desc(): string
    /** `Appearance` */
    settings_appearance(): string
    /** `Select the theme you would like to use.` */
    settings_appearance_secondary(): string
    /** `Follow system settings` */
    settings_appearance_default(): string
    /** `Dark` */
    settings_appearance_dark(): string
    /** `Light` */
    settings_appearance_light(): string
    /** `Language` */
    settings_language(): string
    /** `Select the language you would like to use.` */
    settings_language_secondary(): string
    /** `Choose Ethereum Network` */
    settings_choose_eth_network(): string
    /** `Substitute Post` */
    settings_post_replacement(): string
    /** `All posts on the webpages will be rendered by Mask, including those not created by Mask.` */
    settings_post_replacement_desc(): string
    /** `General` */
    settings_title_general(): string
    /** `Advanced` */
    settings_title_advanced_options(): string
    /** `Database Management` */
    settings_title_database_management(): string
    /** `Launch Page` */
    settings_launch_page(): string
    /** `Select the default page to open when launch the app` */
    settings_launch_page_secondary(): string
    /** `Skip` */
    skip(): string
    /** `Share` */
    share(): string
    /** `Share to…` */
    share_to(): string
    /** `Sharing` */
    sharing(): string
    /** `Submit` */
    submit(): string
    /** `Transfer` */
    transfer(): string
    /** `Unknown time` */
    unknown_time(): string
    /** `Username` */
    username(): string
    /** `Version {{version}}` */
    version_of_stable(options: { version: string }): string
    /** `Version {{version}}-{{build}}-{{hash}}` */
    version_of_unstable(options: { version: string; build: string; hash: string }): string
    /** `https://github.com/DimensionDev/Maskbook/releases/tag/{{tag}}` */
    version_of_release(options: { tag: string }): string
    /** `https://github.com/DimensionDev/Maskbook/tree/{{hash}}` */
    version_of_hash(options: { hash: string }): string
    /** `Wallet Address` */
    wallet_address(): string
    /** `Wallet Name` */
    wallet_name(): string
    /** `Rename Wallet` */
    wallet_rename(): string
    /** `Assets` */
    wallet_assets(): string
    /** `Price` */
    wallet_price(): string
    /** `Balance` */
    wallet_balance(): string
    /** `Value` */
    wallet_value(): string
    /** `No Assets Found` */
    wallet_no_asset(): string
    /** `No Collectables ({{name}}) Found` */
    wallet_no_collectables(options: { name: string }): string
    /** `Loading ...` */
    loading(): string
    /** `I confirm that I need to create a wallet.` */
    wallet_confirmation_hint(): string
    /** `New Wallet` */
    wallet_new(): string
    /** `This will create a new wallet other than the default wallet. You are responsible for keeping the private key to the wallet safe. Please also note that Mask won't be able to pay for your transactions on Ethereum.` */
    wallet_notification(): string
    /** `Wallets` */
    wallets(): string
    /** `Untitled Wallet` */
    untitled_wallet(): string
    /** `Your message…` */
    your_message(): string
    /** `The length of {{name}} should be less than {{length}}.` */
    input_length_exceed_prompt(options: { name: string; length: string }): string
    /** `{{who}} has an error:` */
    crash_title_of(options: { who: string }): string
    /** `Try to recover` */
    crash_retry(): string
    /** `{{days}} days ago` */
    relative_time_days_ago(options: { days: string }): string
    /** `{{hours}} hours ago` */
    relative_time_hours_ago(options: { hours: string }): string
    /** `{{minutes}} minutes ago` */
    relative_time_minutes_ago(options: { minutes: string }): string
    /** `{{months}} months ago` */
    relative_time_months_ago(options: { months: string }): string
    /** `{{seconds}} seconds ago` */
    relative_time_seconds_ago(options: { seconds: string }): string
    /** `{{years}} years ago` */
    relative_time_years_ago(options: { years: string }): string
    /** `Select a Token` */
    plugin_wallet_select_a_token(): string
    /** `Connect a Wallet` */
    plugin_wallet_connect_a_wallet(): string
    /** `Invalid Network` */
    plugin_wallet_invalid_network(): string
    /** `Select a Wallet` */
    plugin_wallet_select_a_wallet(): string
    /** `Waiting for confirmation…` */
    plugin_wallet_transaction_wait_for_confirmation(): string
    /** `Your transaction was submitted!` */
    plugin_wallet_transaction_submitted(): string
    /** `Your transaction was confirmed!` */
    plugin_wallet_transaction_confirmed(): string
    /** `Transaction was rejected!` */
    plugin_wallet_transaction_rejected(): string
    /** `View on Etherscan` */
    plugin_wallet_view_on_etherscan(): string
    /** `Please connect to the appropriate Ethereum network.` */
    plugin_wallet_wrong_network_tip(): string
    /** `Create Wallet` */
    plugin_wallet_on_create(): string
    /** `Connect Wallet` */
    plugin_wallet_on_connect(): string
    /** `Connect Wallet` */
    plugin_wallet_select_provider_dialog_title(): string
    /** `Scan QR code with a WalletConnect-compatible wallet` */
    plugin_wallet_qr_code_with_wallet_connect(): string
    /** `Wrong Network` */
    plugin_wallet_wrong_network(): string
    /** `Unlock MetaMask` */
    plugin_wallet_metamask_unlock(): string
    /** `Unlock {{balance}} {{symbol}}` */
    plugin_wallet_token_unlock(options: { balance: string; symbol: string }): string
    /** `Infinite Unlock` */
    plugin_wallet_token_infinite_unlock(): string
    /** `WalletConnect` */
    plugin_wallet_connect_dialog_title(): string
    /** `Create wallet with Mask` */
    plugin_wallet_connect_to_mask(): string
    /** `Connect to your MetaMask Wallet` */
    plugin_wallet_connect_to_metamask(): string
    /** `Scan with WalletConnect to connect` */
    plugin_wallet_connect_to_walletconnect_on_web(): string
    /** `Connect by WalletConnect` */
    plugin_wallet_connect_to_walletconnect_on_app(): string
    /** `More` */
    plugin_wallet_connect_more(): string
    /** `Comming soon…` */
    plugin_wallet_connect_more_description(): string
    /** `New to Ethereum? ` */
    plugin_wallet_connect_new_ethereum(): string
    /** `Learn more about wallets` */
    plugin_wallet_connect_learn_more_wallets(): string
    /** `Connect to MetaMask` */
    plugin_wallet_connect_safari_metamask(): string
    /** `Connect to Rainbow` */
    plugin_wallet_connect_safari_rainbow(): string
    /** `Connect to Trust` */
    plugin_wallet_connect_safari_trust(): string
    /** `Connect to imToken` */
    plugin_wallet_connect_safari_im_token(): string
    /** `Connect` */
    plugin_wallet_on_connect_in_firefox(): string
    /** `Return to Mobile Wallet Options` */
    plugin_wallet_return_mobile_wallet_options(): string
    /** `View QR Code` */
    plugin_wallet_view_qr_code(): string
    /** `Plugin: Red Packet` */
    plugin_red_packet_display_name(): string
    /** `Split Mode` */
    plugin_red_packet_split_mode(): string
    /** `Average` */
    plugin_red_packet_average(): string
    /** `Random` */
    plugin_red_packet_random(): string
    /** `Shares` */
    plugin_red_packet_shares(): string
    /** `Best Wishes!` */
    plugin_red_packet_best_wishes(): string
    /** `Create New` */
    plugin_red_packet_create_new(): string
    /** `Claim` */
    plugin_red_packet_claim(): string
    /** `Refund` */
    plugin_red_packet_refund(): string
    /** `Select Existing` */
    plugin_red_packet_select_existing(): string
    /** `Attached Message` */
    plugin_red_packet_attached_message(): string
    /** `From: {{name}}` */
    plugin_red_packet_from(options: { name: string }): string
    /** `You have already claimed.` */
    plugin_red_packet_description_claimed(): string
    /** `The red packet is expired.` */
    plugin_red_packet_description_expired(): string
    /** `The red packet has been refunded.` */
    plugin_red_packet_description_refunded(): string
    /** `You could refund {{balance}} {{symbol}}.` */
    plugin_red_packet_description_refund(options: { balance: string; symbol: string }): string
    /** `The red packet is empty.` */
    plugin_red_packet_description_empty(): string
    /** `The red packet is broken.` */
    plugin_red_packet_description_broken(): string
    /** `From {{name}} / {{shares}} shares / {{total}} {{symbol}}` */
    plugin_red_packet_description_failover(options: {
        name: string
        shares: string
        total: string
        symbol: string
    }): string
    /** `https://gitcoin.co/grants/86/gitcoin-sustainability-fund` */
    plugin_gitcoin_readme_fund_link(): string
    /** `Select a token` */
    plugin_gitcoin_select_a_token(): string
    /** `Enter an amount` */
    plugin_gitcoin_enter_an_amount(): string
    /** `Grant not available` */
    plugin_gitcoin_grant_not_available(): string
    /** `Insufficient {{symbol}} balance` */
    plugin_gitcoin_insufficient_balance(options: { symbol: string }): string
    /** `Donate` */
    plugin_gitcoin_donate(): string
    /** `Plugin: File Service` */
    plugin_file_service_display_name(): string
    /** `Use the file` */
    plugin_file_service_on_insert(): string
    /** `Preparing` */
    plugin_file_service_uploading_preparing(): string
    /** `Estimating time…` */
    plugin_file_service_uploading_estimating_time(): string
    /** `{{seconds}}s remaining` */
    plugin_file_service_uploading_in_minute_remaining(options: { seconds: string }): string
    /** `{{minutes}}m {{seconds}}s remaining` */
    plugin_file_service_uploading_remaining(options: { minutes: string; seconds: string }): string
    /** `Uploading… Please do not close this page.` */
    plugin_file_service_uploading_on_cancal(): string
    /** `Recent files` */
    plugin_file_service_recent_files(): string
    /** `Show More` */
    plugin_file_service_show_more(): string
    /** `File Key:` */
    plugin_file_service_file_key(): string
    /** `This file is not encrypted` */
    plugin_file_service_unencrypted(): string
    /** `Service unavailable. Wait a few minutes and try again.` */
    plugin_file_service_signing_failed(): string
    /** `Make It Encrypted` */
    plugin_file_service_on_encrypt_it(): string
    /** `Use Meson CDN` */
    plugin_file_service_use_cdn(): string
    /** `https://legal.mask.io/arweave/file-service/plugin-terms.html` */
    plugin_file_service_legal_terms_link(): string
    /** `https://legal.mask.io/arweave/file-service/privacy-policy-uploader.html` */
    plugin_file_service_legal_policy_link(): string
    /** `Drop to upload` */
    plugin_file_service_drop_indicator(): string
    /** `Size limit: {{limit}}.` */
    plugin_file_service_drop_hint_1(options: { limit: string }): string
    /** `The file will be uploaded immediately and cannot be cancelled.` */
    plugin_file_service_drop_hint_2(): string
    /** `Drop a file here to upload` */
    plugin_file_service_drop_here(): string
    /** `The input is not a single file.` */
    plugin_file_service_error_101(): string
    /** `The file is too large; limit is {{limit}}.` */
    plugin_file_service_error_102(options: { limit: string }): string
    /** `Change File` */
    plugin_file_service_on_change_file(): string
    /** `Swap` */
    plugin_trader_swap(): string
    /** `No Data` */
    plugin_trader_no_data(): string
    /** `General` */
    plugin_trader_tab_market(): string
    /** `Price` */
    plugin_trader_tab_price(): string
    /** `Exchange` */
    plugin_trader_tab_exchange(): string
    /** `Swap 🔥` */
    plugin_trader_tab_swap(): string
    /** `Exchange` */
    plugin_trader_table_exchange(): string
    /** `Pair` */
    plugin_trader_table_pair(): string
    /** `Price` */
    plugin_trader_table_price(): string
    /** `Volume (24h)` */
    plugin_trader_table_volume(): string
    /** `Updated` */
    plugin_trader_table_updated(): string
    /** `Finding price…` */
    plugin_trader_finding_price(): string
    /** `Enter an amount` */
    plugin_trader_error_amount_absence(): string
    /** `Insufficient {{symbol}} balance` */
    plugin_trader_error_insufficient_balance(options: { symbol: string }): string
    /** `Insufficient liquidity for this trade.` */
    plugin_trader_error_insufficient_lp(): string
    /** `Price Impact Too High` */
    plugin_trader_error_price_impact_too_high(): string
    /** `Data Source` */
    plugin_trader_settings_data_source_primary(): string
    /** `Fetch trending data from different platforms.` */
    plugin_trader_settings_data_source_secondary(): string
    /** `Swap Network` */
    plugin_trader_settings_trade_provider_primary(): string
    /** `Swap cryptocurrencies on different exchange networks.` */
    plugin_trader_settings_trade_provider_secondary(): string
    /** `Plugin: Poll` */
    plugin_poll_display_name(): string
    /** `Ask a question…` */
    plugin_poll_question_hint(): string
    /** `choice` */
    plugin_poll_options_hint(): string
    /** `Poll length` */
    plugin_poll_length(): string
    /** `Days` */
    plugin_poll_length_days(): string
    /** `Hours` */
    plugin_poll_length_hours(): string
    /** `Minutes` */
    plugin_poll_length_minutes(): string
    /** `Unknown` */
    plugin_poll_length_unknown(): string
    /** `Create New` */
    plugin_poll_create_new(): string
    /** `Select Existing` */
    plugin_poll_select_existing(): string
    /** `Send Poll` */
    plugin_poll_send_poll(): string
    /** `Closed` */
    plugin_poll_status_closed(): string
    /** `Voting` */
    plugin_poll_status_voting(): string
    /** `Voted.` */
    plugin_poll_status_voted(): string
    /** `{{time}} left until vote ends` */
    plugin_poll_deadline(options: { time: string }): string
    /** `Share` */
    plugin_ito_share(): string
    /** `Enter` */
    plugin_ito_enter(): string
    /** `Swap {{token}}` */
    plugin_ito_dialog_claim_swap_title(options: { token: string }): string
    /** `Swap Reminder` */
    plugin_ito_dialog_claim_reminder_title(): string
    /** `Share` */
    plugin_ito_dialog_claim_share_title(): string
    /** `Anyone can create an ERC20 token on Ethereum with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.` */
    plugin_ito_dialog_claim_reminder_text1(): string
    /** `This interface can load arbitrary tokens by token address. Please take extra caution and do your own research when interacting with arbitrary ERC20 tokens.` */
    plugin_ito_dialog_claim_reminder_text2(): string
    /** `If you purchase an arbitrary token, you might not be able to sell it back.` */
    plugin_ito_dialog_claim_reminder_text3(): string
    /** `THE RIGHTS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED OR SOLD, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, IN JURISDICTIONS OR TO WHOM SUCH AN OFFER WOULD BE UNLAWFUL.` */
    plugin_ito_dialog_claim_reminder_text4(): string
    /** `I Understand` */
    plugin_ito_dialog_claim_reminder_agree(): string
    /** `In exchange for` */
    plugin_ito_dialog_claim_swap_exchange(): string
    /** `Swap` */
    plugin_ito_dialog_claim_swap_panel_title(): string
    /** `Exceeds single wallet limit` */
    plugin_ito_dialog_claim_swap_exceed_wallet_limit(): string
    /** `Expired` */
    plugin_ito_expired(): string
    /** `Completed` */
    plugin_ito_completed(): string
    /** `New` */
    plugin_ito_create_new(): string
    /** `Past` */
    plugin_ito_select_existing(): string
    /** `ITO Composition Dialog` */
    plugin_ito_display_name(): string
    /** `Token` */
    plugin_ito_sell_token(): string
    /** `Price` */
    plugin_ito_sell_price(): string
    /** `Input` */
    plugin_ito_sell_total_amount(): string
    /** `Swap limit {{limit}} {{token}}` */
    plugin_ito_allocation_per_wallet(options: { limit: string; token: string }): string
    /** `Start Time {{zone}}` */
    plugin_ito_begin_time(options: { zone: string }): string
    /** `End Time {{zone}}` */
    plugin_ito_end_time(options: { zone: string }): string
    /** `Swap Ratio` */
    plugin_ito_swap_ration_label(): string
    /** `Title` */
    plugin_item_message_label(): string
    /** `Next` */
    plugin_ito_next(): string
    /** `Back` */
    plugin_ito_back(): string
    /** `Create an ITO with {{amount}} {{symbol}}.` */
    plugin_ito_transaction_dialog_summary(options: { amount: string; symbol: string }): string
    /** `Swap` */
    plugin_ito_swap(): string
    /** `You can find your ITOs in the Past tab.` */
    plugin_ito_send_tip(): string
    /** `Send {{total}} {{symbol}}` */
    plugin_ito_send_text(options: { total: string; symbol: string }): string
    /** `Connect a wallet` */
    plugin_ito_connect_a_wallet(): string
    /** `Enter an amount` */
    plugin_ito_error_enter_amount(): string
    /** `Select a Token` */
    plugin_ito_error_select_token(): string
    /** `Enter an amount and Select a token` */
    plugin_ito_error_enter_amount_and_token(): string
    /** `Enter swap limit` */
    plugin_ito_error_allocation_absence(): string
    /** `Invalid amount` */
    plugin_ito_error_allocation_invalid(): string
    /** `Invalid: start time cannot be later than end time` */
    plugin_ito_error_exchange_time(): string
    /** `Insufficient {{symbol}} balance` */
    plugin_ito_error_balance(options: { symbol: string }): string
    /** `Start Time {{date}}` */
    plugin_ito_list_start_date(options: { date: string }): string
    /** `End Time {{date}}` */
    plugin_ito_list_end_date(options: { date: string }): string
    /** `Swapped: ` */
    plugin_ito_list_sold_total(): string
    /** `Total: ` */
    plugin_ito_list_total(): string
    /** `Type` */
    plugin_ito_list_table_type(): string
    /** `Swap Ratio` */
    plugin_ito_list_table_price(): string
    /** `Swapped` */
    plugin_ito_list_table_sold(): string
    /** `Balance` */
    plugin_ito_list_table_got(): string
    /** `Send` */
    plugin_ito_list_button_send(): string
    /** `Withdraw` */
    plugin_ito_withdraw(): string
    /** `Withdrawn` */
    plugin_ito_withdrawn(): string
    /** `You got {{amount}} {{symbol}}` */
    plugin_ito_your_claimed_amount(options: { amount: string; symbol: string }): string
    /** `return {{amount}} {{symbol}} .` */
    plugin_ito_your_refund_amount(options: { amount: string; symbol: string }): string
    /** `{{remain}} / {{total}} {{token}} Swapped` */
    plugin_ito_swapped_status(options: { remain: string; total: string; token: string }): string
    /** `Congratulations!` */
    plugin_ito_congratulations(): string
    /** `Better luck next time` */
    plugin_ito_out_of_stock_hit(): string
    /** `I just finished my first #ITO with @realmaskbook to swap ${{symbol}}. Install mask.io and start your own Initial Twitter Offering! 
 {{link}}` */
    plugin_ito_claim_success_share(options: { symbol: string; link: string }): string
    /** `{{symbol}}({{name}}) is launching a new #ITO. Come and join it! Follow @realMaskbook (mask.io) to find more events! 
 {{link}}` */
    plugin_ito_claim_foreshow_share(options: { symbol: string; name: string; link: string }): string
    /** `Each wallet can only participate once.` */
    plugin_ito_claim_only_once_remind(): string
    /** `Password: {{password}}` */
    plugin_ito_password(options: { password: string }): string
    /** `{{amount}} {{token}} per {{swap}} ` */
    plugin_ito_swap_title(options: { amount: string; token: string; swap: string }): string
    /** `End in {{date}}.` */
    plugin_ito_swap_end_date(options: { date: string }): string
    /** `Not started` */
    plugin_ito_status_no_start(): string
    /** `Ongoing` */
    plugin_ito_status_ongoing(): string
    /** `Out of stock` */
    plugin_ito_status_out_of_stock(): string
    /** `To Address` */
    wallet_transfer_to_address(): string
    /** `Balance {{balance}} {{symbol}}` */
    wallet_transfer_balance(options: { balance: string; symbol: string }): string
    /** `Memo` */
    wallet_transfer_memo(): string
    /** `Optional message` */
    wallet_transfer_memo_placeholder(): string
    /** `Amount ` */
    wallet_transfer_amount(): string
    /** `Receive` */
    wallet_transfer_receive(): string
    /** `Send` */
    wallet_transfer_send(): string
    /** `Transfer` */
    wallet_transfer_title(): string
    /** `Enter an amount` */
    wallet_transfer_error_amount_absence(): string
    /** `Enter recipient address` */
    wallet_transfer_error_address_absence(): string
    /** `Invalid recipient address` */
    wallet_transfer_error_invalid_address(): string
    /** `Insufficient {{symbol}} balance` */
    wallet_transfer_error_insufficent_balance(options: { symbol: string }): string
}
export declare const MaskTrans: {
    /** `Keep the <strong>12 mnemonic words</strong> OR <strong>private key</strong> below <strong>carefully</strong> in a safe place. You will need them to restore this wallet.` */
    backup_wallet_hint: React.ComponentType<TypedTransProps<{}, { strong: JSX.Element }>>
    /** `Unknown Error; please <again>try again</again>.` */
    backup_qrcode_error: React.ComponentType<TypedTransProps<{}, { again: JSX.Element }>>
    /** `Do you want to delete <strong>{{contact}}</strong>? This operation cannot be reverted.` */
    delete_contact_confirmation: React.ComponentType<TypedTransProps<{ contact: string }, { strong: JSX.Element }>>
    /** `Are you sure?<br/> If you do not have backup, you will lose <strong>ALL YOUR MONEY</strong> of it.` */
    delete_wallet_hint: React.ComponentType<TypedTransProps<{}, { br: JSX.Element; strong: JSX.Element }>>
    /** `You can add <strong>{{token}}</strong> back in the future by going to "Add Token" in the wallet panel.` */
    hide_token_hint: React.ComponentType<TypedTransProps<{ token: string }, { strong: JSX.Element }>>
    /** `Mask needs the username to connect your Profile to your Persona.<br /> Make sure it is correct.` */
    setup_guide_find_username_text: React.ComponentType<TypedTransProps<{}, { br: JSX.Element }>>
    /** `By using this service, you will also be contributing 5% of your contribution to the <fund>Gitcoin grants development fund</fund>.` */
    plugin_gitcoin_readme: React.ComponentType<TypedTransProps<{}, { fund: JSX.Element }>>
    /** `By using this plugin, you agree to the <terms>terms</terms> and the <policy>privacy policy</policy>.` */
    plugin_file_service_legal_text: React.ComponentType<
        TypedTransProps<{}, { terms: JSX.Element; policy: JSX.Element }>
    >
}
import { TransProps } from 'react-i18next'
type TypedTransProps<Value, Components> = Omit<TransProps<string>, 'values' | 'ns' | 'i18nKey'> &
    ({} extends Value ? {} : { values: Value }) & { components: Components }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmpzb24iXSwibmFtZXMiOlsiIiwiQWJvdXQiLCJNYXNrIE5ldHdvcmsgaXMgYSBwb3J0YWwgdG8gdGhlIG5ldywgb3BlbiBJbnRlcm5ldC4gV2l0aCBNYXNrIE5ldHdvcmssIHlvdSBjYW4gc2VuZCBlbmNyeXB0ZWQgcG9zdHMgdG8geW91ciBmcmllbmRzLCBwYXJ0aWNpcGF0ZSBpbiBjcnlwdG9jdXJyZW5jeSBsdWNreS1kcmF3cywgYW5kIHNoYXJlIGVuY3J5cHRlZCBmaWxlcyBvbiB0aGUgcGxhdGZvcm1zIHlvdSBhcmUgYWxyZWFkeSB1c2luZy4iLCJHZXQgaW4gdG91Y2giLCJGZWVkYmFjazogIiwiU291cmNlIENvZGU6ICIsIkxpY2Vuc2U6ICIsInt7ZXJyb3J9fVxuVGhpcyBwdWJsaWMga2V5IHdvbid0IGJlIHNhdmVkIGluIE1hc2suIiwiVGhlIHB1YmxpYyBrZXkgaXMgTk9UIHZlcmlmaWVkIiwiVGhlIHB1YmxpYyBrZXkgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIEtleXN0b3JlIiwiVGhlIHB1YmxpYyBrZXkgaGFzIGJlZW4gZm91bmQsIHZlcmlmeWluZ+KApiIsIkFkZCBUb2tlbiIsIlNlYXJjaCBUb2tlbnMiLCJEZWNyeXB0IHRoaXMgcG9zdCB3aXRoICNtYXNrX2lvICEge3tlbmNyeXB0ZWR9fSIsIlRoaXMgaW1hZ2UgaXMgZW5jcnlwdGVkIHdpdGggI21hc2tfaW8uIPCfk6rwn5SRIEluc3RhbGwgbWFzay5pbyB0byBkZWNyeXB0IGl0LiB7e3JhbmRvbX19IiwiUGFzdGUgbWFudWFsbHkiLCJQbGVhc2UgY29weSB0aGUgZm9sbG93aW5nIHRleHQgYW5kIGltYWdlIChpZiB0aGVyZSBpcyBhbnkpIGFuZCBwdWJsaXNoIGl0IiwiT3BlbiBpbiBhIG5ldyB0YWIiLCJEbyB5b3UgbmVlZCB0byBwYXN0ZSBlbmNyeXB0ZWQgY29udGVudCBtYW51YWxseT8iLCJTaG93IG1lIGhvdyIsIlBsZWFzZSBjbGljayB0aGUg4oCcUG9zdOKAnSBidXR0b24gdG8gb3BlbiB0aGUgY29tcG9zZSBkaWFsb2cuIiwiTmV3IGF2YXRhciBVUkwiLCJMZWF2ZSBpdCBibGFuayBtZWFucyBubyBjaGFuZ2UiLCJCYWNrdXAiLCJCYWNrdXAgRGF0YWJhc2UiLCJCYWNrdXAgWW91ciBQZXJzb25hIiwiQmFja3VwIFdhbGxldCIsIkNhbmNlbCIsIkFkZCBhbiBlbmNyeXB0ZWQgY29tbWVudOKApiIsIkNvbmZpcm0iLCJDb3B5IHRleHQiLCJDb3B5IGltYWdlIiwiQ29weSB3YWxsZXQgYWRkcmVzcyBzdWNjZXNzZnVsbHkhIiwiQ29weSB0ZXh0IHN1Y2Nlc3NmdWxseSEiLCJDb3B5IGltYWdlIHN1Y2Nlc3NmdWxseSEiLCJDb25uZWN0IHRvIiwiQ29ubmVjdGluZ+KApiIsIkNvbnRhY3RzIiwiR3JvdXBzIiwiQ3JlYXRlIiwiQ3JlYXRlIGEgUGVyc29uYSIsIkNyZWF0ZSBQZXJzb25hIiwiQ3JlYXRpbmfigKYiLCJEYXNoYm9hcmQiLCJPaywgQmFjayBpdCB1cCIsIkNyZWF0ZSBhIGRhdGFiYXNlIGJhY2t1cCBmaWxlLiBEbyBpdCByZWd1bGFybHkuIiwiWW91IGNhbiBiYWNrdXAgeW91ciBwZXJzb25hIGluIHRoZSBmb2xsb3dpbmcgb3B0aW9ucy4iLCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHBlcnNvbmEge3tuYW1lfX0/IFRoaXMgb3BlcmF0aW9uIGNhbm5vdCBiZSByZXZlcnRlZC4iLCJEbyB5b3Ugd2FudCB0byBkaXNjb25uZWN0IHt7cHJvZmlsZX19IG9uIHt7bmV0d29ya319IGZyb20gdGhlIHBlcnNvbmEge3twZXJzb25hfX0/IFRoaXMgb3BlcmF0aW9uIGNhbm5vdCBiZSByZXZlcnRlZC4iLCJSZXN0b3JlIGZyb20gYSBwcmV2aW91cyBkYXRhYmFzZSBiYWNrdXAuIiwiRmFpbCB0byBsb2FkIGRhc2hib2FyZC4iLCJKb2luIFRlc3RzIGZvciBNb2JpbGUiLCJodHRwczovL21hc2suaW8vZG93bmxvYWQtbGlua3MvI21vYmlsZSIsIlBhc3RlIHRoZSBCYXNlNjQgaGVyZeKApiIsIlBhc3RlIHRoZSBkYXRhYmFzZSBiYWNrdXAgYXMgdGV4dCBoZXJl4oCmIiwiWW91IGNhbiBpbXBvcnQgYSBwZXJzb25hIGJhY2t1cCBpbiB0aGUgZm9sbG93aW5nIHdheXMuIiwiUmVzdG9yZWQgZnJvbSBhIGJhY2t1cCBhdCB7e3RpbWV9fSIsIlNvdXJjZSBDb2RlIiwiaHR0cHM6Ly9naXRodWIuY29tL0RpbWVuc2lvbkRldi9NYXNrYm9vayIsImluZm9AZGltZW5zaW9uLmltIiwiR05VIEFHUEwgMy4wIiwiRm9sbG93ZXJzIG9mIHt7b3duZXJ9fSIsIkZvbGxvd2VkIGJ5IHt7b3duZXJ9fSIsIkZyaWVuZHMgb2Yge3tvd25lcn19IiwiQXBwZW5kIHJlY2lwaWVudHMiLCJNYXNrIGRlY3J5cHRpbmfigKYiLCJNYXNrIGRlY29kaW5n4oCmIiwiTWFzayBpcyBsb29raW5nIGZvciB0aGUgcHVibGljIGtleSBvZiB0aGUgYXV0aG9y4oCmIiwiTWFzayBpcyByZXRyaWV2aW5nIHRoZSBwb3N0IGtleSB0byBkZWNyeXB0IHRoaXMgcG9zdOKApiIsIk9yaWdpbmFsbHkgcG9zdGVkIGJ5IHt7bmFtZX19IiwiRGVjcnlwdGVkIGJ5IE1hc2s6IiwiRGlzbWlzcyIsIkRlbGV0ZSIsIkRlbGV0ZSBDb250YWN0IiwiRGVsZXRlIFBlcnNvbmEiLCJEZWxldGUgV2FsbGV0IiwiSGlkZSBUb2tlbiIsIkRpc2Nvbm5lY3QgUHJvZmlsZSIsIkRvbmUhIiwiRG93bmxvYWQiLCJFbWFpbCIsIkVycm9yIiwiWW91IGhhdmUgbm8gd2FsbGV0IGN1cnJlbnRseS4gQ3JlYXRlIG9yIEltcG9ydCBvbmUgYmVmb3JlIGRvaW5nIHRoYXQuIiwiRXJyb3Igb2NjdXJyZWQgd2hlbiBpbnZva2luZyB0aGUgc21hcnQgY29udHJhY3QuIiwiWW91ciBhbGxvd2FuY2UgaW4gdGhpcyB3YWxsZXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gZG8gdGhhdC4iLCJVbmtub3duIEVycm9yLiIsIkZlZWRiYWNrIiwiRmluZ2VycHJpbnQiLCJBY3Rpdml0eSIsIkluYm91bmQiLCJPdXRib3VuZCIsIkJ1eSIsIkJ1eSBOb3ciLCJbT3B0aW9uYWxdIiwiRmluZCB5b3VyIHVzZXJuYW1lIiwiQ29ubmVjdCIsIkZhaWxlZOKApiBQbGVhc2UgdHJ5IGl0IGFnYWluLiIsIkNyZWF0ZSBOb3ciLCJGYWlsZWTigKYgUGxlYXNlIGFkZCBpdCB0byB0aGUgY29tcG9zZSBib3ggbWFudWFsbHkuIiwiU2F5IGhlbGxvIHRvIGV2ZXJ5b25lISIsIkNyZWF0ZSB5b3VyIGZpcnN0IHBvc3QgdmlhIE1hc2suIiwiWW91IG5lZWQgdG8gcHVibGlzaCBwb3N0cyB2aWEgTWFzayBmcmVxdWVudGx5IHRvIGFsbG93IG90aGVycyB0byBlbmNyeXB0IHRoZWlyIHBvc3RzIGZvciB5b3UuIiwiSGVsbG8sIE1hc2shIiwiSW1wb3J0IiwiSW1wb3J0IEZhaWxlZCIsIkltcG9ydCBXYWxsZXQiLCJJbXBvcnQgWW91ciBQZXJzb25hIiwiSW50ZXJuYWwgSUQiLCJLZXl3b3JkcyIsIkVuZ2xpc2giLCLkuK3mlociLCLml6XmnKzoqp4iLCJNbmVtb25pYyBXb3JkcyIsIk15IFBlcnNvbmFzIiwiTXkgV2FsbGV0cyIsIk5hbWUiLCJOaWNrbmFtZSIsIk5vIHJlc3VsdCIsIk5vdCBhdmFpbGFibGUiLCJPSyIsIlBhc3N3b3JkIiwiQ29weSB0byBjbGlwYm9hcmQiLCJUaGlzIHBvc3Qgc2VlbXMgdG8gYmUgY29ycnVwdGVkLiBNYXNrIGNhbm5vdCBkZWNyeXB0IGl0LiIsIlRoaXMgcG9zdCBpcyBpbmNvbXBsZXRlLiBZb3UgbmVlZCB0byB2aWV3IHRoZSBmdWxsIHBvc3QgdG8gZGVjcnlwdCBpdC4iLCJQYXlsb2FkIG5vdCBmb3VuZC4iLCJTdXBwb3J0IGZvciBBbHBoYTQxIGlzIGRlcHJlY2F0ZWQuIFRlbGwgeW91ciBmcmllbmRzIHRvIHVwZ3JhZGUgTWFzayEiLCJBbGwgcGVvcGxlIHJlY29yZGVkIGluIHRoZSBNYXNrIGRhdGFiYXNlLiIsInt7bmFtZX19ICh7e2NvdW50fX0gaW4gdGhlIGdyb3VwKSIsIlRoaXMgaXMgYW4gZW1wdHkgZ3JvdXAiLCJ7e3Blb3BsZX194oCmIHt7Y291bnR9fSBpbiB0b3RhbCIsInt7Y291bnR9fSBpbiB0b3RhbCIsIlBlcnNvbmFzIiwiTWFzayBpcyBsYWNraW5nIHBlcm1pc3Npb24gdG8gd29yay4iLCJGaXggaXQiLCJDdXJyZW50IFBlcnNvbmEiLCJFbnRlciBEYXNoYm9hcmQiLCJDb25uZWN0IFdhbGxldCIsIlNldHVwIEZpcnN0IFBlcnNvbmEiLCJQcm9maWxlcyIsIlBvc3RzIiwiRmluaXNoIiwiRGlzbWlzcyB0aGUgY29tcG9zZSBkaWFsb2ciLCJJbWFnZSBQYXlsb2FkIiwiTW9yZSBPcHRpb25zIiwiVGV4dCBnb2VzIGhlcmXigKYiLCJNeXNlbGYiLCJFdmVyeW9uZSIsIlNlbGVjdCBSZWNpcGllbnRzIiwiRXh0cmEgU3BlY2lmaWMgQ29udGFjdHMgKHt7c2VsZWN0ZWR9fSBzZWxlY3RlZCkiLCJNYXNrOiBDb21wb3NlIiwiQ29tcG9zZSBlbmNyeXB0ZWQgcG9zdCIsIk1hc2siLCJQcml2YWN5IFBvbGljeSIsImh0dHBzOi8vbGVnYWwubWFzay5pby9tYXNrYm9vay8iLCJQcml2YXRlIGtleSIsIlJlbmFtZSBQZXJzb25hIiwiUGVyc29uYSBOYW1lIiwiUVIgQ29kZSIsIlJlbG9hZCIsIkhpZGUiLCJSZW5hbWUiLCJSZXNldCIsIlJlc3RvcmUgRGF0YWJhc2UiLCJGaWxlIiwiVGV4dCIsIkRyYWcgZGF0YWJhc2UgYmFja3VwIGludG8gdGhpcyBkaWFsb2figKYiLCJDaG9vc2UgYSBmaWxlIG9yIGRyYWcgaXQgaGVyZS4iLCJEcmFnIFFSIGNvZGUgaW1hZ2UgYmFja3VwIGludG8gdGhpcyBkaWFsb2figKYiLCJDaG9vc2UgYW4gaW1hZ2Ugb3IgZHJhZyBpdCBoZXJlLiIsIlNhdmUiLCJTZWFyY2giLCJTZWFyY2ggQ29udGFjdCIsIlR5cGUgaGVyZSB0byBzZWFyY2giLCJTZWxlY3QgQWxsIiwiU2VsZWN0IE5vbmUiLCJEb25lIiwiU2VsZWN0IFNwZWNpZmljIENvbnRhY3RzIiwiRGVjcnlwdGlvbiBmYWlsZWQuIiwiVGhpcyBkb2VzIG5vdCBzZWVtIGxpa2UgYSBiYWNrdXAgb2YgTWFzay4iLCJNYXNrIGRvZXMgbm90IGZpbmQgdGhlIHBvc3Qga2V5LiBUaGlzIHBvc3QgbWF5IG5vdCBiZSBpbnRlbmRlZCB0byBzaGFyZSB3aXRoIHlvdS4iLCJUaGUgcHVibGljIGtleSBvZiB7e25hbWV9fSBjYW5ub3QgYmUgZm91bmQhIiwiRmFpbGVkIHRvIHB1Ymxpc2ggdGhlIEFFUyBrZXkhIiwiRGVjcnlwdGlvbiBmYWlsZWQuIE1heWJlIHlvdSBzZWxlY3RlZCBhIHdyb25nIGlkZW50aXR5IG9yIGltcG9ydGVkIGEga2V5IHRoYXQgd2FzIG5vdCB1c2VkIHRvIGVuY3J5cHQgdGhpcyBwb3N0LiIsIkRlY29kZSBpbWFnZSBmYWlsZWQuIiwiVW5rbm93biBwb3N0IHZlcnNpb24uIFlvdSBtYXkgbmVlZCB0byB1cGRhdGUgTWFzay4iLCJJbnZhbGlkIFVzZXJuYW1lIiwib3IiLCJOZXh0IiwiUmVzdG9yZSBGcm9tIEJhY2t1cCIsIlN0YXJ0IEZyb20gU2NyYXRjaCIsIlJlc3RvcmUiLCJBZHZhbmNl4oCmIiwiR2V0IFN0YXJ0ZWQiLCJXZWxjb21lIHRvIE1hc2siLCJNYXNrIHdpbGwgY29sbGVjdCBzb21lIGRhdGEgd2hlbiB5b3UgdXNlIGl0LCBidXQgdGhlIGRldmVsb3BlcnMgb2YgTWFzayBoYXZlIG5vIGFjY2VzcyB0byB0aGVtLiBUaGUgY29sbGVjdGVkIGRhdGEgYXJlIHN0b3JlZCBsb2NhbGx5LCBleGNlcHQgZm9yIHRoZSBkYXRhIHdoaWNoIGFyZSBuZWNlc3NhcnkgZm9yIGVuYWJsaW5nIHlvdXIgZnJpZW5kcyB0byBkZWNyeXB0IHRoZSBwb3N0cyB5b3Ugc2hhcmVkLiIsIkkgYWdyZWUgd2l0aCB0aGUgIiwicHJpdmFjeSBwb2xpY3kiLCIuIiwiR2V0dGluZyBTdGFydGVkIiwiWW91IG1heSBjb25uZWN0IHNvY2lhbCBuZXR3b3JrIHByb2ZpbGVzIHRvIHlvdXIgcGVyc29uYSBpbiB0aGUgbmV4dCBzdGVwLiIsIkNvbm5lY3QgYSBTb2NpYWwgTmV0d29yayBQcm9maWxlIGZvciBcInt7bmFtZX19XCIiLCJOb3cgRmFjZWJvb2sgYW5kIFR3aXR0ZXIgYXJlIHN1cHBvcnRlZC4iLCJSZXN0b3JlIEZhaWxlZCIsIkFkdmFuY2VkIFJlc3RvcmF0aW9uIE9wdGlvbnMiLCJUaGUgZm9sbG93aW5nIGRhdGEgd2lsbCBiZSBpbXBvcnRlZC4iLCJTY2FuIFFSIENvZGUiLCJGYWlsIHRvIHNjYW4gUVIgY29kZSIsIkJhY2t1cCBGYWlsZWQiLCJTZXR0aW5ncyIsIkFuY2llbnQgUG9zdCBDb21wYXRpYmlsaXR5IE1vZGUiLCJFbmFibGUgaWYgeW91IG5lZWQgdG8gZGVjcnlwdCBhbmNpZW50IHBvc3RzIChjcmVhdGVkIGJlZm9yZSBKYW4gMjAyMCkuIiwiRGVidWcgTW9kZSIsIlNlZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGZvciBkZWJ1Z2dpbmcuIiwiQXBwZWFyYW5jZSIsIlNlbGVjdCB0aGUgdGhlbWUgeW91IHdvdWxkIGxpa2UgdG8gdXNlLiIsIkZvbGxvdyBzeXN0ZW0gc2V0dGluZ3MiLCJEYXJrIiwiTGlnaHQiLCJMYW5ndWFnZSIsIlNlbGVjdCB0aGUgbGFuZ3VhZ2UgeW91IHdvdWxkIGxpa2UgdG8gdXNlLiIsIkNob29zZSBFdGhlcmV1bSBOZXR3b3JrIiwiU3Vic3RpdHV0ZSBQb3N0IiwiQWxsIHBvc3RzIG9uIHRoZSB3ZWJwYWdlcyB3aWxsIGJlIHJlbmRlcmVkIGJ5IE1hc2ssIGluY2x1ZGluZyB0aG9zZSBub3QgY3JlYXRlZCBieSBNYXNrLiIsIkdlbmVyYWwiLCJBZHZhbmNlZCIsIkRhdGFiYXNlIE1hbmFnZW1lbnQiLCJMYXVuY2ggUGFnZSIsIlNlbGVjdCB0aGUgZGVmYXVsdCBwYWdlIHRvIG9wZW4gd2hlbiBsYXVuY2ggdGhlIGFwcCIsIlNraXAiLCJTaGFyZSIsIlNoYXJlIHRv4oCmIiwiU2hhcmluZyIsIlN1Ym1pdCIsIlRyYW5zZmVyIiwiVW5rbm93biB0aW1lIiwiVXNlcm5hbWUiLCJWZXJzaW9uIHt7dmVyc2lvbn19IiwiVmVyc2lvbiB7e3ZlcnNpb259fS17e2J1aWxkfX0te3toYXNofX0iLCJodHRwczovL2dpdGh1Yi5jb20vRGltZW5zaW9uRGV2L01hc2tib29rL3JlbGVhc2VzL3RhZy97e3RhZ319IiwiaHR0cHM6Ly9naXRodWIuY29tL0RpbWVuc2lvbkRldi9NYXNrYm9vay90cmVlL3t7aGFzaH19IiwiV2FsbGV0IEFkZHJlc3MiLCJXYWxsZXQgTmFtZSIsIlJlbmFtZSBXYWxsZXQiLCJBc3NldHMiLCJQcmljZSIsIkJhbGFuY2UiLCJWYWx1ZSIsIk5vIEFzc2V0cyBGb3VuZCIsIk5vIENvbGxlY3RhYmxlcyAoe3tuYW1lfX0pIEZvdW5kIiwiTG9hZGluZyAuLi4iLCJJIGNvbmZpcm0gdGhhdCBJIG5lZWQgdG8gY3JlYXRlIGEgd2FsbGV0LiIsIk5ldyBXYWxsZXQiLCJUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IHdhbGxldCBvdGhlciB0aGFuIHRoZSBkZWZhdWx0IHdhbGxldC4gWW91IGFyZSByZXNwb25zaWJsZSBmb3Iga2VlcGluZyB0aGUgcHJpdmF0ZSBrZXkgdG8gdGhlIHdhbGxldCBzYWZlLiBQbGVhc2UgYWxzbyBub3RlIHRoYXQgTWFzayB3b24ndCBiZSBhYmxlIHRvIHBheSBmb3IgeW91ciB0cmFuc2FjdGlvbnMgb24gRXRoZXJldW0uIiwiV2FsbGV0cyIsIlVudGl0bGVkIFdhbGxldCIsIllvdXIgbWVzc2FnZeKApiIsIlRoZSBsZW5ndGggb2Yge3tuYW1lfX0gc2hvdWxkIGJlIGxlc3MgdGhhbiB7e2xlbmd0aH19LiIsInt7d2hvfX0gaGFzIGFuIGVycm9yOiIsIlRyeSB0byByZWNvdmVyIiwie3tkYXlzfX0gZGF5cyBhZ28iLCJ7e2hvdXJzfX0gaG91cnMgYWdvIiwie3ttaW51dGVzfX0gbWludXRlcyBhZ28iLCJ7e21vbnRoc319IG1vbnRocyBhZ28iLCJ7e3NlY29uZHN9fSBzZWNvbmRzIGFnbyIsInt7eWVhcnN9fSB5ZWFycyBhZ28iLCJTZWxlY3QgYSBUb2tlbiIsIkNvbm5lY3QgYSBXYWxsZXQiLCJJbnZhbGlkIE5ldHdvcmsiLCJTZWxlY3QgYSBXYWxsZXQiLCJXYWl0aW5nIGZvciBjb25maXJtYXRpb27igKYiLCJZb3VyIHRyYW5zYWN0aW9uIHdhcyBzdWJtaXR0ZWQhIiwiWW91ciB0cmFuc2FjdGlvbiB3YXMgY29uZmlybWVkISIsIlRyYW5zYWN0aW9uIHdhcyByZWplY3RlZCEiLCJWaWV3IG9uIEV0aGVyc2NhbiIsIlBsZWFzZSBjb25uZWN0IHRvIHRoZSBhcHByb3ByaWF0ZSBFdGhlcmV1bSBuZXR3b3JrLiIsIkNyZWF0ZSBXYWxsZXQiLCJTY2FuIFFSIGNvZGUgd2l0aCBhIFdhbGxldENvbm5lY3QtY29tcGF0aWJsZSB3YWxsZXQiLCJXcm9uZyBOZXR3b3JrIiwiVW5sb2NrIE1ldGFNYXNrIiwiVW5sb2NrIHt7YmFsYW5jZX19IHt7c3ltYm9sfX0iLCJJbmZpbml0ZSBVbmxvY2siLCJXYWxsZXRDb25uZWN0IiwiQ3JlYXRlIHdhbGxldCB3aXRoIE1hc2siLCJDb25uZWN0IHRvIHlvdXIgTWV0YU1hc2sgV2FsbGV0IiwiU2NhbiB3aXRoIFdhbGxldENvbm5lY3QgdG8gY29ubmVjdCIsIkNvbm5lY3QgYnkgV2FsbGV0Q29ubmVjdCIsIk1vcmUiLCJDb21taW5nIHNvb27igKYiLCJOZXcgdG8gRXRoZXJldW0/ICIsIkxlYXJuIG1vcmUgYWJvdXQgd2FsbGV0cyIsIkNvbm5lY3QgdG8gTWV0YU1hc2siLCJDb25uZWN0IHRvIFJhaW5ib3ciLCJDb25uZWN0IHRvIFRydXN0IiwiQ29ubmVjdCB0byBpbVRva2VuIiwiUmV0dXJuIHRvIE1vYmlsZSBXYWxsZXQgT3B0aW9ucyIsIlZpZXcgUVIgQ29kZSIsIlBsdWdpbjogUmVkIFBhY2tldCIsIlNwbGl0IE1vZGUiLCJBdmVyYWdlIiwiUmFuZG9tIiwiU2hhcmVzIiwiQmVzdCBXaXNoZXMhIiwiQ3JlYXRlIE5ldyIsIkNsYWltIiwiUmVmdW5kIiwiU2VsZWN0IEV4aXN0aW5nIiwiQXR0YWNoZWQgTWVzc2FnZSIsIkZyb206IHt7bmFtZX19IiwiWW91IGhhdmUgYWxyZWFkeSBjbGFpbWVkLiIsIlRoZSByZWQgcGFja2V0IGlzIGV4cGlyZWQuIiwiVGhlIHJlZCBwYWNrZXQgaGFzIGJlZW4gcmVmdW5kZWQuIiwiWW91IGNvdWxkIHJlZnVuZCB7e2JhbGFuY2V9fSB7e3N5bWJvbH19LiIsIlRoZSByZWQgcGFja2V0IGlzIGVtcHR5LiIsIlRoZSByZWQgcGFja2V0IGlzIGJyb2tlbi4iLCJGcm9tIHt7bmFtZX19IC8ge3tzaGFyZXN9fSBzaGFyZXMgLyB7e3RvdGFsfX0ge3tzeW1ib2x9fSIsImh0dHBzOi8vZ2l0Y29pbi5jby9ncmFudHMvODYvZ2l0Y29pbi1zdXN0YWluYWJpbGl0eS1mdW5kIiwiU2VsZWN0IGEgdG9rZW4iLCJFbnRlciBhbiBhbW91bnQiLCJHcmFudCBub3QgYXZhaWxhYmxlIiwiSW5zdWZmaWNpZW50IHt7c3ltYm9sfX0gYmFsYW5jZSIsIkRvbmF0ZSIsIlBsdWdpbjogRmlsZSBTZXJ2aWNlIiwiVXNlIHRoZSBmaWxlIiwiUHJlcGFyaW5nIiwiRXN0aW1hdGluZyB0aW1l4oCmIiwie3tzZWNvbmRzfX1zIHJlbWFpbmluZyIsInt7bWludXRlc319bSB7e3NlY29uZHN9fXMgcmVtYWluaW5nIiwiVXBsb2FkaW5n4oCmIFBsZWFzZSBkbyBub3QgY2xvc2UgdGhpcyBwYWdlLiIsIlJlY2VudCBmaWxlcyIsIlNob3cgTW9yZSIsIkZpbGUgS2V5OiIsIlRoaXMgZmlsZSBpcyBub3QgZW5jcnlwdGVkIiwiU2VydmljZSB1bmF2YWlsYWJsZS4gV2FpdCBhIGZldyBtaW51dGVzIGFuZCB0cnkgYWdhaW4uIiwiTWFrZSBJdCBFbmNyeXB0ZWQiLCJVc2UgTWVzb24gQ0ROIiwiaHR0cHM6Ly9sZWdhbC5tYXNrLmlvL2Fyd2VhdmUvZmlsZS1zZXJ2aWNlL3BsdWdpbi10ZXJtcy5odG1sIiwiaHR0cHM6Ly9sZWdhbC5tYXNrLmlvL2Fyd2VhdmUvZmlsZS1zZXJ2aWNlL3ByaXZhY3ktcG9saWN5LXVwbG9hZGVyLmh0bWwiLCJEcm9wIHRvIHVwbG9hZCIsIlNpemUgbGltaXQ6IHt7bGltaXR9fS4iLCJUaGUgZmlsZSB3aWxsIGJlIHVwbG9hZGVkIGltbWVkaWF0ZWx5IGFuZCBjYW5ub3QgYmUgY2FuY2VsbGVkLiIsIkRyb3AgYSBmaWxlIGhlcmUgdG8gdXBsb2FkIiwiVGhlIGlucHV0IGlzIG5vdCBhIHNpbmdsZSBmaWxlLiIsIlRoZSBmaWxlIGlzIHRvbyBsYXJnZTsgbGltaXQgaXMge3tsaW1pdH19LiIsIkNoYW5nZSBGaWxlIiwiU3dhcCIsIk5vIERhdGEiLCJFeGNoYW5nZSIsIlN3YXAg8J+UpSIsIlBhaXIiLCJWb2x1bWUgKDI0aCkiLCJVcGRhdGVkIiwiRmluZGluZyBwcmljZeKApiIsIkluc3VmZmljaWVudCBsaXF1aWRpdHkgZm9yIHRoaXMgdHJhZGUuIiwiUHJpY2UgSW1wYWN0IFRvbyBIaWdoIiwiRGF0YSBTb3VyY2UiLCJGZXRjaCB0cmVuZGluZyBkYXRhIGZyb20gZGlmZmVyZW50IHBsYXRmb3Jtcy4iLCJTd2FwIE5ldHdvcmsiLCJTd2FwIGNyeXB0b2N1cnJlbmNpZXMgb24gZGlmZmVyZW50IGV4Y2hhbmdlIG5ldHdvcmtzLiIsIlBsdWdpbjogUG9sbCIsIkFzayBhIHF1ZXN0aW9u4oCmIiwiY2hvaWNlIiwiUG9sbCBsZW5ndGgiLCJEYXlzIiwiSG91cnMiLCJNaW51dGVzIiwiVW5rbm93biIsIlNlbmQgUG9sbCIsIkNsb3NlZCIsIlZvdGluZyIsIlZvdGVkLiIsInt7dGltZX19IGxlZnQgdW50aWwgdm90ZSBlbmRzIiwiRW50ZXIiLCJTd2FwIHt7dG9rZW59fSIsIlN3YXAgUmVtaW5kZXIiLCJBbnlvbmUgY2FuIGNyZWF0ZSBhbiBFUkMyMCB0b2tlbiBvbiBFdGhlcmV1bSB3aXRoIGFueSBuYW1lLCBpbmNsdWRpbmcgY3JlYXRpbmcgZmFrZSB2ZXJzaW9ucyBvZiBleGlzdGluZyB0b2tlbnMgYW5kIHRva2VucyB0aGF0IGNsYWltIHRvIHJlcHJlc2VudCBwcm9qZWN0cyB0aGF0IGRvIG5vdCBoYXZlIGEgdG9rZW4uIiwiVGhpcyBpbnRlcmZhY2UgY2FuIGxvYWQgYXJiaXRyYXJ5IHRva2VucyBieSB0b2tlbiBhZGRyZXNzLiBQbGVhc2UgdGFrZSBleHRyYSBjYXV0aW9uIGFuZCBkbyB5b3VyIG93biByZXNlYXJjaCB3aGVuIGludGVyYWN0aW5nIHdpdGggYXJiaXRyYXJ5IEVSQzIwIHRva2Vucy4iLCJJZiB5b3UgcHVyY2hhc2UgYW4gYXJiaXRyYXJ5IHRva2VuLCB5b3UgbWlnaHQgbm90IGJlIGFibGUgdG8gc2VsbCBpdCBiYWNrLiIsIlRIRSBSSUdIVFMgQVJFIE5PVCBCRUlORyBPRkZFUkVEIE9SIFNPTEQgQU5EIE1BWSBOT1QgQkUgT0ZGRVJFRCBPUiBTT0xELCBESVJFQ1RMWSBPUiBJTkRJUkVDVExZLCBJTiBXSE9MRSBPUiBJTiBQQVJULCBJTiBKVVJJU0RJQ1RJT05TIE9SIFRPIFdIT00gU1VDSCBBTiBPRkZFUiBXT1VMRCBCRSBVTkxBV0ZVTC4iLCJJIFVuZGVyc3RhbmQiLCJJbiBleGNoYW5nZSBmb3IiLCJFeGNlZWRzIHNpbmdsZSB3YWxsZXQgbGltaXQiLCJFeHBpcmVkIiwiQ29tcGxldGVkIiwiTmV3IiwiUGFzdCIsIklUTyBDb21wb3NpdGlvbiBEaWFsb2ciLCJUb2tlbiIsIklucHV0IiwiU3dhcCBsaW1pdCB7e2xpbWl0fX0ge3t0b2tlbn19IiwiU3RhcnQgVGltZSB7e3pvbmV9fSIsIkVuZCBUaW1lIHt7em9uZX19IiwiU3dhcCBSYXRpbyIsIlRpdGxlIiwiQmFjayIsIkNyZWF0ZSBhbiBJVE8gd2l0aCB7e2Ftb3VudH19IHt7c3ltYm9sfX0uIiwiWW91IGNhbiBmaW5kIHlvdXIgSVRPcyBpbiB0aGUgUGFzdCB0YWIuIiwiU2VuZCB7e3RvdGFsfX0ge3tzeW1ib2x9fSIsIkNvbm5lY3QgYSB3YWxsZXQiLCJFbnRlciBhbiBhbW91bnQgYW5kIFNlbGVjdCBhIHRva2VuIiwiRW50ZXIgc3dhcCBsaW1pdCIsIkludmFsaWQgYW1vdW50IiwiSW52YWxpZDogc3RhcnQgdGltZSBjYW5ub3QgYmUgbGF0ZXIgdGhhbiBlbmQgdGltZSIsIlN0YXJ0IFRpbWUge3tkYXRlfX0iLCJFbmQgVGltZSB7e2RhdGV9fSIsIlN3YXBwZWQ6ICIsIlRvdGFsOiAiLCJUeXBlIiwiU3dhcHBlZCIsIlNlbmQiLCJXaXRoZHJhdyIsIldpdGhkcmF3biIsIllvdSBnb3Qge3thbW91bnR9fSB7e3N5bWJvbH19IiwicmV0dXJuIHt7YW1vdW50fX0ge3tzeW1ib2x9fSAuIiwie3tyZW1haW59fSAvIHt7dG90YWx9fSB7e3Rva2VufX0gU3dhcHBlZCIsIkNvbmdyYXR1bGF0aW9ucyEiLCJCZXR0ZXIgbHVjayBuZXh0IHRpbWUiLCJJIGp1c3QgZmluaXNoZWQgbXkgZmlyc3QgI0lUTyB3aXRoIEByZWFsbWFza2Jvb2sgdG8gc3dhcCAke3tzeW1ib2x9fS4gSW5zdGFsbCBtYXNrLmlvIGFuZCBzdGFydCB5b3VyIG93biBJbml0aWFsIFR3aXR0ZXIgT2ZmZXJpbmchIFxuIHt7bGlua319Iiwie3tzeW1ib2x9fSh7e25hbWV9fSkgaXMgbGF1bmNoaW5nIGEgbmV3ICNJVE8uIENvbWUgYW5kIGpvaW4gaXQhIEZvbGxvdyBAcmVhbE1hc2tib29rIChtYXNrLmlvKSB0byBmaW5kIG1vcmUgZXZlbnRzISBcbiB7e2xpbmt9fSIsIkVhY2ggd2FsbGV0IGNhbiBvbmx5IHBhcnRpY2lwYXRlIG9uY2UuIiwiUGFzc3dvcmQ6IHt7cGFzc3dvcmR9fSIsInt7YW1vdW50fX0ge3t0b2tlbn19IHBlciB7e3N3YXB9fSAiLCJFbmQgaW4ge3tkYXRlfX0uIiwiTm90IHN0YXJ0ZWQiLCJPbmdvaW5nIiwiT3V0IG9mIHN0b2NrIiwiVG8gQWRkcmVzcyIsIkJhbGFuY2Uge3tiYWxhbmNlfX0ge3tzeW1ib2x9fSIsIk1lbW8iLCJPcHRpb25hbCBtZXNzYWdlIiwiQW1vdW50ICIsIlJlY2VpdmUiLCJFbnRlciByZWNpcGllbnQgYWRkcmVzcyIsIkludmFsaWQgcmVjaXBpZW50IGFkZHJlc3MiXSwibWFwcGluZ3MiOiJnQkFBQUEsVzs7SUFDYUMsSzs7SUFDbUJDLHdCOztJQUNOQyxrQjs7SUFDR0MscUI7O0lBQ0dDLHdCOztJQUNKQyxvQjs7O0lBQ1FDLDRCLFlBQUcsSzs7SUFDRkMsNkI7O0lBQ0xDLHdCOztJQUNFQywwQjs7SUFDakJDLFM7O0lBQ1lDLHFCOztJQUNrQkMsdUMsWUFBcUMsUzs7SUFDakNDLDJDLFlBQThFLE07O0lBQzNGQyw4Qjs7SUFDRUMsZ0M7O0lBQ01DLHNDOztJQUNaQywwQjs7SUFDT0MsaUM7O0lBQ0dDLG9DOztJQUN0QkMsYzs7SUFDWUMsMEI7O0lBQ3BCQyxNOztJQUNTQyxlOztJQUNEQyxjOztJQUNEQyxhOztJQUdQQyxNOztJQUNrQkMsd0I7O0lBQ2pCQyxPOztJQUNFQyxTOztJQUNDQyxVOztJQUNpQkMsMkI7O0lBQ1BDLG9COztJQUNDQyxxQjs7SUFDWEMsVTs7SUFDQUMsVTs7SUFDRkMsUTs7SUFDRkMsTTs7SUFDQUMsTTs7SUFDVUMsZ0I7O0lBQ0ZDLGM7O0lBQ05DLFE7O0lBQ0NDLFM7O0lBQzZCQyxzQzs7SUFDUkMsOEI7O0lBQ0RDLDZCOztJQUNRQyxxQyxZQUFxQyxJOztJQUN6Q0MsaUMsWUFBNkIsTyxVQUFlLE8sVUFBNkIsTzs7SUFDNUVDLDhCOztJQUNIQywyQjs7SUFDTkMscUI7O0lBQ0tDLDBCOztJQUNVQyxvQzs7SUFDQUMsb0M7O0lBQ0FDLG9DOztJQUNDQyxxQyxZQUE2QixJOztJQUM3Q0MscUI7O0lBQ0tDLDBCOztJQUNIQyx1Qjs7SUFDTkMsaUI7O0lBQ1lDLDZCLFlBQWdCLEs7O0lBQ2hCQyw2QixZQUFlLEs7O0lBQ1RDLG1DLFlBQWMsSzs7SUFDakJDLGdDOztJQUNKQyw0Qjs7SUFDRkMsMEI7O0lBQ3FCQywrQzs7SUFDRkMsNkM7O0lBQ1pDLGlDLFlBQXdCLEk7O0lBQ2xDQyx1Qjs7SUFDaEJDLE87O0lBQ0RDLE07O0lBQ1FDLGM7O0lBRUFDLGM7O0lBQ0RDLGE7O0lBRUhDLFU7O0lBRVFDLGtCOztJQUNkQyxJOztJQUNJQyxROztJQUNIQyxLOztJQUNPQyxZOztJQUNHQyxlOztJQUNPQyxzQjs7SUFDSUMsMEI7O0lBQ2JDLGE7O0lBQ0xDLFE7O0lBQ0dDLFc7O0lBQ0hDLFE7O0lBQ1FDLGdCOztJQUNDQyxpQjs7SUFDZEMsRzs7SUFDSUMsTzs7SUFDYUMsb0I7O0lBQ1dDLCtCOztJQUVQQyx3Qjs7SUFDRUMsMEI7O0lBQ0VDLDRCOztJQUNFQyw4Qjs7SUFDSEMsMkI7O0lBQ0VDLDZCOztJQUNFQywrQjs7SUFDRkMsNkI7O0lBQ3ZCQyxNOztJQUNPQyxhOztJQUNBQyxhOztJQUNNQyxtQjs7SUFDUkMsVzs7SUFDSEMsUTs7SUFDR0MsVzs7SUFDQUMsVzs7SUFDQUMsVzs7SUFDR0MsYzs7SUFDSEMsVzs7SUFDREMsVTs7SUFDTkMsSTs7SUFDSUMsUTs7SUFDUUMsZ0I7O0lBQ0hDLGE7O0lBQ1hDLEU7O0lBQ01DLFE7O0lBQ1NDLGlCOztJQUNOQyxXOztJQUNPQyxrQjs7SUFDREMsaUI7O0lBQ09DLHdCOztJQUNOQyxrQjs7SUFDS0MsdUIsWUFBRyxJLFVBQVUsSzs7SUFDWEMseUI7O0lBQ0dDLDRCLFlBQUcsTSxVQUFZLEs7O0lBQ0pDLHVDLFlBQUcsSzs7SUFDbENDLFE7O0lBQ2dCQyx3Qjs7SUFDQUMsd0I7O0lBQ0hDLHFCOztJQUNBQyxxQjs7SUFDREMsb0I7O0lBQ0tDLHlCOztJQUNqQkMsUTs7SUFDSEMsSzs7SUFDY0MsbUI7O0lBQ01DLHlCOztJQUNDQywwQjs7SUFDS0MsK0I7O0lBQ1BDLHdCOztJQUNrQkMsMEM7O0lBQ01DLGdEOztJQUNaQyxvQzs7SUFDTUMsMEMsWUFBNEIsUTs7SUFDcERDLGtCOztJQUNLQyx1Qjs7SUFDRkMscUI7O0lBQ1BDLGM7O0lBQ0tDLG1COztJQUNSQyxXOztJQUNHQyxjOztJQUNGQyxZOztJQUNMQyxPOztJQUNEQyxNOztJQUNGQyxJOztJQUNFQyxNOztJQUNEQyxLOztJQUNXQyxnQjs7SUFDS0MscUI7O0lBQ0FDLHFCOztJQUNJQyx5Qjs7SUFDREMsd0I7O0lBQ1NDLGlDOztJQUNEQyxnQzs7SUFDNUJDLEk7O0lBQ0VDLE07O0lBQ1FDLGM7O0lBQ1FDLHNCOztJQUNaQyxVOztJQUNDQyxXOztJQUMyQkMsc0M7O0lBQ0RDLHFDOztJQUNaQyx5Qjs7SUFDRUMsMkI7O0lBQ0hDLHdCOztJQUNJQyw0QixZQUFxQixJOztJQUNkQyxtQzs7SUFDREMsa0M7O0lBQ0NDLG1DOztJQUNaQyx1Qjs7SUFDQ0Msd0I7O0lBQ1hDLGE7O0lBQ0tDLGtCOztJQUNPQyx5Qjs7SUFDQ0MsMEI7O0lBQ0xDLHFCOztJQUNBQyxxQjs7SUFDRG5ELG9COztJQUNBckMsb0I7O0lBQ0MxRSxxQjs7SUFDSGtKLGtCOztJQUNFcEosb0I7O0lBQ0txSyx5Qjs7SUFDS0MsOEI7O0lBQ0tDLG1DOztJQUNZQywrQzs7SUFDQUMsK0M7O0lBQ0FDLCtDOztJQUMxQkMscUI7O0lBQ0tDLDBCOztJQUNaQyxjLFlBQXlDLEk7O0lBQ3BDQyxtQjs7SUFDTHZDLGM7O0lBQ0tqSCxtQjs7SUFDQXlKLG1COztJQUNHQyxzQjs7SUFDS3BKLDJCOztJQUNBbUosMkI7O0lBQ0F4QywyQjs7SUFDSzBDLGdDOztJQUNUQyx1Qjs7SUFDREMsc0I7O0lBQ0pDLGtCOztJQUNWQyxROztJQUNnQ0Msd0M7O0lBQ0tDLDZDOztJQUN4QkMscUI7O0lBQ0tDLDBCOztJQUNQQyxtQjs7SUFDVUMsNkI7O0lBQ0ZDLDJCOztJQUNIQyx3Qjs7SUFDQ0MseUI7O0lBQ1JDLGlCOztJQUNVQywyQjs7SUFDQUMsMkI7O0lBQ0ZDLHlCOztJQUNLQyw4Qjs7SUFDUkMsc0I7O0lBQ1NDLCtCOztJQUNHQyxrQzs7SUFDZEMsb0I7O0lBQ1VDLDhCOztJQUMxQkMsSTs7SUFDQ0MsSzs7SUFDR0MsUTs7SUFDREMsTzs7SUFDREMsTTs7SUFDRUMsUTs7SUFDSUMsWTs7SUFDSkMsUTs7SUFDU0MsaUIsWUFBVyxPOztJQUNUQyxtQixZQUFXLE8sVUFBWSxLLFVBQVUsSTs7SUFDbENDLGtCLFlBQXlELEc7O0lBQzVEQyxlLFlBQWlELEk7O0lBQ2xEQyxjOztJQUNIQyxXOztJQUNFQyxhOztJQUNBQyxhOztJQUNEQyxZOztJQUNFQyxjOztJQUNGQyxZOztJQUNHQyxlOztJQUNPQyxzQixZQUFvQixJOztJQUNuQ0MsTzs7SUFDaUJDLHdCOztJQUNkQyxVOztJQUNTQyxtQjs7SUFDWkMsTzs7SUFDUUMsZTs7SUFDSEMsWTs7SUFDY0MsMEIsWUFBaUIsSSxVQUE2QixNOztJQUMxREMsYyxZQUFHLEc7O0lBQ05DLFc7O0lBQ1dDLHNCLFlBQUcsSTs7SUFDRkMsdUIsWUFBRyxLOztJQUNEQyx5QixZQUFHLE87O0lBQ0pDLHdCLFlBQUcsTTs7SUFDRkMseUIsWUFBRyxPOztJQUNMQyx1QixZQUFHLEs7O0lBQ0VDLDRCOztJQUNFQyw4Qjs7SUFDREMsNkI7O0lBQ0FDLDZCOztJQUNrQkMsK0M7O0lBQ1pDLG1DOztJQUNBQyxtQzs7SUFDREMsa0M7O0lBQ0hDLCtCOztJQUNBQywrQjs7SUFDUkMsdUI7O0lBQ0MzSSx3Qjs7SUFDa0JBLDBDOztJQUNENEkseUM7O0lBQ2RDLDJCOztJQUNFQyw2Qjs7SUFDSEMsMEIsWUFBVSxPLFVBQVksTTs7SUFDYkMsbUM7O0lBQ0RDLGtDOztJQUNMQyw2Qjs7SUFDSUMsaUM7O0lBQ1lDLDZDOztJQUNBQyw2Qzs7SUFDbkJDLDBCOztJQUNZQyxzQzs7SUFDSkMsa0M7O0lBQ01DLHdDOztJQUNIQyxxQzs7SUFDREMsb0M7O0lBQ0ZDLGtDOztJQUNHQyxxQzs7SUFDRnRNLG1DOztJQUNPdU0sMEM7O0lBQ2hCQywwQjs7SUFDSUMsOEI7O0lBQ0ZDLDRCOztJQUNIQyx5Qjs7SUFDREMsd0I7O0lBQ0FDLHdCOztJQUNLQyw2Qjs7SUFDREMsNEI7O0lBQ0xDLHVCOztJQUNDQyx3Qjs7SUFDU0MsaUM7O0lBQ0NDLGtDOztJQUNaQyxzQixZQUFTLEk7O0lBQ01DLHFDOztJQUNBQyxxQzs7SUFDQ0Msc0M7O0lBQ0ZDLG9DLFlBQW9CLE8sVUFBWSxNOztJQUNqQ0MsbUM7O0lBQ0NDLG9DOztJQUNFQyxzQyxZQUFRLEksVUFBVyxNLFVBQW9CLEssVUFBVSxNOztJQUV4REMsK0I7O0lBQ0ZDLDZCOztJQUNDQyw4Qjs7SUFDSUMsa0M7O0lBQ0NDLG1DLFlBQWdCLE07O0lBQzlCQyxxQjs7SUFDV0MsZ0M7O0lBQ0hDLDZCOztJQUNVQyx1Qzs7SUFDTUMsNkM7O0lBQ0lDLGlELFlBQUcsTzs7SUFDYkMsdUMsWUFBRyxPLFVBQWEsTzs7SUFDaEJDLHVDOztJQUNQQyxnQzs7SUFDSEMsNkI7O0lBQ0RDLDRCOztJQUNHQywrQjs7SUFDR0Msa0M7O0lBQ0RDLGlDOztJQUNOQywyQjs7SUFFU0Msb0M7O0lBQ0NDLHFDOztJQUNIQyxrQzs7SUFDSEMsK0IsWUFBZSxLOztJQUNmQywrQjs7SUFDRkMsNkI7O0lBQ0FDLDZCOztJQUNBQyw2QixZQUFtQyxLOztJQUM5QkMsa0M7O0lBQ2hCQyxrQjs7SUFDR0MscUI7O0lBQ0cxSCx3Qjs7SUFDRHFCLHVCOztJQUNHc0csMEI7O0lBQ0pDLHNCOztJQUNNRCw0Qjs7SUFDSkUsd0I7O0lBQ0N4Ryx5Qjs7SUFDQ3lHLDBCOztJQUNDQywyQjs7SUFDQUMsMkI7O0lBQ09sQyxrQzs7SUFDTUUsd0MsWUFBZ0IsTTs7SUFDckJpQyxtQzs7SUFDTUMseUM7O0lBQ0NDLDBDOztJQUNFQyw0Qzs7SUFDQ0MsNkM7O0lBQ0VDLCtDOztJQUN2QkMsd0I7O0lBQ0NDLHlCOztJQUNEQyx3Qjs7SUFDTkMsa0I7O0lBQ0tDLHVCOztJQUNDQyx3Qjs7SUFDRUMsMEI7O0lBQ0FDLDBCOztJQUNKL0Qsc0I7O0lBQ0tHLDJCOztJQUNONkQscUI7O0lBQ0lDLHlCOztJQUNBQyx5Qjs7SUFDREMsd0I7O0lBQ0pDLG9CLFlBQUcsSTs7SUFDUDdJLGdCOztJQUNBOEksZ0I7O0lBQ2tCQyxrQyxZQUFRLEs7O0lBQ0pDLHNDOztJQUNIaEosbUM7O0lBQ0dpSixzQzs7SUFDQUMsc0M7O0lBQ0FDLHNDOztJQUNBQyxzQzs7SUFDQUMsc0M7O0lBQ0RDLHFDOztJQUNHbkMsd0M7O0lBQ1FvQyxnRDs7SUFDOUJDLGtCOztJQUNFQyxvQjs7SUFDQ0MscUI7O0lBQ0tDLDBCOztJQUNIQyx1Qjs7SUFDRkMscUI7O0lBQ0E5SSxxQjs7SUFDTytJLDRCOztJQUNJQyxnQyxZQUFjLEssVUFBVSxLOztJQUNuQ0MscUIsWUFBYyxJOztJQUNoQkMsbUIsWUFBWSxJOztJQUNIQyw0Qjs7SUFDSEMseUI7O0lBQ1Y3TSxlOztJQUNBOE0sZTs7SUFDc0JDLHFDLFlBQXNCLE0sVUFBVyxNOztJQUN2RGxELGU7O0lBQ0ltRCxtQjs7SUFDQ0Msb0IsWUFBUSxLLFVBQVUsTTs7SUFDWEMsMkI7O0lBQ0VoRiw2Qjs7SUFDQXBELDZCOztJQUNVcUksdUM7O0lBQ0pDLG1DOztJQUNBQyxtQzs7SUFDTEMsOEI7O0lBQ05sRix3QixZQUFnQixNOztJQUNkbUYsMEIsWUFBYyxJOztJQUNoQkMsd0IsWUFBWSxJOztJQUNWQywwQjs7SUFDTEMscUI7O0lBQ0tDLDBCOztJQUNDZiwyQjs7SUFDRGdCLDBCOztJQUNEbEsseUI7O0lBQ0VtSywyQjs7SUFDUkMsbUI7O0lBQ0NDLG9COztJQUNVQyw4QixZQUFXLE0sVUFBVyxNOztJQUN2QkMsNkIsWUFBVSxNLFVBQVcsTTs7SUFDekJDLHlCLFlBQUcsTSxVQUFhLEssVUFBVSxLOztJQUN6QkMsMEI7O0lBQ0NDLDJCOzs7SUFDR0MsOEIsWUFBNkQsTSxVQUEyRSxJOzs7SUFDdklDLCtCLFlBQUcsTSxVQUFXLEksVUFBMkcsSTs7SUFDdkhDLGlDOztJQUNkQyxtQixZQUFhLFE7O0lBQ1hDLHFCLFlBQUcsTSxVQUFXLEssVUFBYyxJOztJQUN6QkMsd0IsWUFBVSxJOztJQUNSQywwQjs7SUFDREMseUI7O0lBQ0tDLDhCOztJQUNKQywwQjs7SUFDSEMsdUIsWUFBVyxPLFVBQVksTTs7SUFDMUJDLG9COztJQUNZQyxnQzs7SUFDVkMsc0I7O0lBQ0NDLHVCOztJQUNIdEIsb0I7O0lBQ0MvSyxxQjs7SUFDZW9GLG9DOztJQUNDa0gscUM7O0lBQ0FDLHFDOztJQUNJakgseUMsWUFBZ0IsTTs7OztJQWpjdkMsa0IsNENBQTZLLE07O0lBQzVLLG1CLDRDQUF3QixLOztJQWdEaEIsMkIsd0NBQWlDLE8sY0FBVCxNOztJQUdqQyxrQiw0Q0FBZSxFLGVBQW9FLE07O0lBRXRGLGUsd0NBQXVCLEssY0FBVCxNOztJQW1CQyw4Qiw0Q0FBa0UsRTs7SUEwTzNFLHFCLDRDQUFzRixJOztJQXFCN0UsOEIsNENBQXlDLEssZUFBMkUsTSIsImZpbGUiOiJpMThuX2dlbmVyYXRlZC5kLnRzIn0=
