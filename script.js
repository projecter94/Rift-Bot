// script.js
// --- FULL COMMAND LIST (from your message) ---
const COMMANDS = [
  {
    id: "spy",
    label: "🕵️ Spy / Info",
    commands: [
      {
        name: "info",
        desc: "Shows detailed info about a user",
        usage: ",info @user or user_id",
        examples: [",info @user123", ",info 123456789"]
      },
      {
        name: "bscan",
        desc: "Scan server for bot accounts",
        usage: ",bscan / ,bs",
        examples: [",bscan", ",bs"]
      },
      {
        name: "infect",
        desc: "Infect a user (nickname & bio)",
        usage: ",infect @user or user_id / ,i",
        examples: [",infect @user123", ",i @user123"]
      },
      {
        name: "infectall",
        desc: "Infect all users",
        usage: ",infectall / ,ia",
        examples: [",infectall", ",ia"]
      },
      {
        name: "disinfect",
        desc: "Disinfect a user",
        usage: ",disinfect @user or user_id / ,di",
        examples: [",disinfect @user123", ",di @user123"]
      },
      {
        name: "disinfectall",
        desc: "Disinfect all users",
        usage: ",disinfectall / ,dia",
        examples: [",disinfectall", ",dia"]
      }
    ]
  },

  {
    id: "moderation",
    label: "🛡️ Moderation",
    commands: [
      { name: "mute", desc: "Mute a user", usage: ",mute @user <duration>", examples: [",mute @user 10m"] },
      { name: "unmute", desc: "Unmute a user", usage: ",unmute @user", examples: [",unmute @user123"] },
      { name: "muteall", desc: "Mute all users", usage: ",muteall / ,ma <duration>", examples: [",ma 10m"] },
      { name: "unmuteall", desc: "Unmute all users", usage: ",unmuteall / ,uma", examples: [",uma"] },
      { name: "ban", desc: "Ban a user", usage: ",ban @user [reason]", examples: [",ban @user spam"] },
      { name: "kick", desc: "Kick a user", usage: ",kick @user [reason]", examples: [",kick @user rulebreak"] },
      { name: "warn", desc: "Warn a user", usage: ",warn @user [reason]", examples: [",warn @user toxicity"] },
      { name: "warnings", desc: "Show warnings of a user", usage: ",warnings @user", examples: [",warnings @user123"] },
      { name: "clearwarnings", desc: "Clear all warnings of a user", usage: ",clearwarnings @user", examples: [",clearwarnings @user123"] },
      { name: "unban", desc: "Unban a user", usage: ",unban <user_id>", examples: [",unban 123456789012345678"] },
      { name: "banall", desc: "Ban all users", usage: ",banall / ,ba", examples: [",banall", ",ba"] },
      { name: "unbanall", desc: "Unban all users", usage: ",unbanall / ,uba", examples: [",unbanall", ",uba"] },
      { name: "tempban", desc: "Temporarily ban a user", usage: ",tban <user> <time>", examples: [",tban @user 7d"] },
      { name: "nickname", desc: "Change a user’s nickname", usage: ",nickname / ,nk @user <new nickname>", examples: [",nk @user NewNick"] },
      { name: "resetnickname", desc: "Reset a user’s nickname", usage: ",resetnickname / ,rnk @user", examples: [",rnk @user123"] },
      { name: "antilink", desc: "Blocks links in the server", usage: ",antilink / ,al", examples: [",al"] },
      { name: "antimention", desc: "Blocks mentions of a user", usage: ",antimention / ,am @user", examples: [",am @user123"] },
      { name: "antiemoji", desc: "Blocks a specific emoji", usage: ",antiemoji / ,ae <emoji>", examples: [",ae 😄"] },
      { name: "antibot", desc: "Prevents new bots from joining the server", usage: ",antibot / ,ab", examples: [",ab"] },
      { name: "lock", desc: "Lock a specific channel for everyone and all roles", usage: ",lock <channel>", examples: [",lock #general"] },
      { name: "unlock", desc: "Unlock a specific channel for everyone and all roles", usage: ",unlock <channel>", examples: [",unlock #general"] },
      { name: "lockdown", desc: "Lock all channels in the server", usage: ",lockdown", examples: [",lockdown"] },
      { name: "unlockdown", desc: "Unlock all channels in the server", usage: ",unlockdown", examples: [",unlockdown"] }
    ]
  },

  {
    id: "message",
    label: "📜 Message",
    commands: [
      { name: "msg", desc: "Send a message to a channel", usage: ",msg <channel_id> <message>", examples: [",msg 123456789 Hello everyone"] },
      { name: "deletemsg", desc: "Delete latest messages", usage: ",deletemsg <amount> / ,dm <amount>", examples: [",deletemsg 10", ",dm 10"] },
      { name: "deletemsgid", desc: "Delete specific message by ID", usage: ",deletemsgid <message_id> / ,dmi <message_id>", examples: [",deletemsgid 987654321012345678", ",dmi 987654321012345678"] },
      { name: "purge", desc: "Delete a specific amount of messages", usage: ",purge / ,p <amount>", examples: [",purge 50", ",p 50"] },
      { name: "purgeall", desc: "Delete all messages", usage: ",purgeall / ,pa", examples: [",purgeall", ",pa"] },
      { name: "limitmsgs", desc: "Limit messages by a user", usage: ",limitmsgs @user <amount> / ,lm @user <amount>", examples: [",lm @user 5"] },
      { name: "resetlimitmsgs", desc: "Remove message limit", usage: ",resetlimitmsgs @user / ,rlm @user", examples: [",rlm @user"] },
      { name: "assignlogchannel", desc: "Assign a channel to log messages of a user", usage: ",assignlogchannel / ,alc", examples: [",alc #logs"] },
      { name: "resetassignedlogchannel", desc: "Reset assigned log channel", usage: ",resetassignedlogchannel / ,ralc", examples: [",ralc"] },
      { name: "msglog", desc: "Start logging messages of a user to the assigned channel", usage: ",msglog @user / ,ml @user", examples: [",ml @user123"] },
      { name: "stopmsglog", desc: "Stop logging messages of a user", usage: ",stopmsglog @user / ,sml @user", examples: [",sml @user123"] },
      { name: "enableantispam", desc: "Enable anti-spam in the current channel (asks for cooldown in seconds)", usage: ",enableantispam / ,eas", examples: [",eas"] },
      { name: "disableantispam", desc: "Disable anti-spam in the current channel", usage: ",disableantispam / ,das", examples: [",das"] },
      { name: "enableautoreply", desc: "Enable auto-reply for specific words", usage: ",enableautoreply / ,ear", examples: [",ear word reply"] },
      { name: "disableautoreply", desc: "Disable auto-reply", usage: ",disableautoreply / ,dar", examples: [",dar"] },
      { name: "enablewordsblocker", desc: "Enable blocking of custom words", usage: ",enablewordsblocker / ,ewb", examples: [",ewb"] },
      { name: "disablewordsblocker", desc: "Disable custom words blocker", usage: ",disablewordsblocker / ,dwb", examples: [",dwb"] }
    ]
  },

  {
    id: "fun",
    label: "💎 Fun",
    commands: [
      { name: "8ball", desc: "Ask the magic 8ball", usage: "8ball <sentence>", examples: [",8ball Will I win?"] },
      { name: "trait", desc: "Shows random traits of a user", usage: "trait <user>", examples: [",trait @user123"] },
      { name: "boom", desc: "Display a fun explosion effect", usage: "boom / ,unboom", examples: [",boom", ",unboom"] },
      { name: "circle", desc: "Draw a circle", usage: ",circle", examples: [",circle"] },
      { name: "square", desc: "Draw a square", usage: ",square", examples: [",square"] },
      { name: "rectangle", desc: "Draw a rectangle", usage: ",rectangle", examples: [",rectangle"] },
      { name: "diamond", desc: "Draw a diamond", usage: ",diamond", examples: [",diamond"] },
      { name: "count", desc: "Count a number", usage: ",count <number>", examples: [",count 10"] },
      { name: "roast", desc: "Roast a mentioned user", usage: "roast / ,r @user", examples: [",r @user123"] },
      { name: "math", desc: "Calculate numbers", usage: ",math <num> <+|-|*|/> <num>", examples: [",math 5 + 3"] },
      { name: "hi", desc: "Replies to you", usage: ",hi", examples: [",hi"] },
      { name: "hello", desc: "Replies to you", usage: ",hello", examples: [",hello"] },
      { name: "yes", desc: "Replies to you", usage: ",yes", examples: [",yes"] },
      { name: "no", desc: "Replies to you", usage: ",no", examples: [",no"] },
      { name: "yo", desc: "Replies to you", usage: ",yo", examples: [",yo"] },
      { name: "shoot", desc: "Shoots a user", usage: "shoot @user or user_id / ,sh", examples: [",sh @user123"] },
      { name: "kill", desc: "Kills a user", usage: "kill @user or user_id / ,kl", examples: [",kl @user123"] },
      { name: "stab", desc: "Stabs a user", usage: "stab @user or user_id / ,st", examples: [",st @user123"] },
      { name: "coinflip", desc: "Flips a coin (Heads or Tails)", usage: "coinflip / ,flipcoin", examples: [",flipcoin"] },
      { name: "reverse", desc: "Reverses the last message of a user", usage: ",reverse @user", examples: [",reverse @user123"] },
      { name: "fart", desc: "Make a funny fart sound or message", usage: ",fart", examples: [",fart"] },
      { name: "nerdrate", desc: "Rate how nerdy someone is", usage: ",nerdrate", examples: [",nerdrate"] },
      { name: "cringe", desc: "Rate how cringe someone or something is", usage: ",cringe", examples: [",cringe"] },
      { name: "hug", desc: "Hug a mentioned user", usage: ",hug @user", examples: [",hug @user123"] },
      { name: "slap", desc: "Slap a mentioned user", usage: ",slap @user", examples: [",slap @user123"] },
      { name: "ship", desc: "Ship two users together", usage: ",ship @user @user2", examples: [",ship @a @b"] },
      { name: "simp", desc: "Rate how much someone simps", usage: ",simp", examples: [",simp @user123"] },
      { name: "gayrate", desc: "Rate how gay someone is", usage: ",gayrate", examples: [",gayrate"] },
      { name: "rate", desc: "General rating command", usage: ",rate <thing>", examples: [",rate pizza"] },
      { name: "dice", desc: "Roll a dice", usage: ",dice", examples: [",dice"] }
    ]
  },

  {
    id: "utility",
    label: "⚡ Utility",
    commands: [
      // nickname/resetnickname duplicated in Moderation; keep here as requested
      { name: "nickname", desc: "Change a user’s nickname", usage: ",nickname / ,nk @user <new nickname>", examples: [",nk @user NewNick"] },
      { name: "resetnickname", desc: "Reset a user’s nickname", usage: ",resetnickname / ,rnk @user", examples: [",rnk @user123"] },
      { name: "verify", desc: "Enable server verification", usage: ",verify / ,sv <channel_id> <role_id>", examples: [",sv 123456 789012"] },
      { name: "disableverification", desc: "Disable verification system", usage: ",disableverification / ,dv", examples: [",dv"] },
      { name: "joinlogs", desc: "Log users joining", usage: ",joinlogs / ,jl <channel_id>", examples: [",jl 123456"] },
      { name: "leavelogs", desc: "Log users leaving", usage: ",leavelogs / ,ll <channel_id>", examples: [",ll 123456"] }
    ]
  },

  {
    id: "whitelist",
    label: "✔️ Server Whitelisting (Owner Only)",
    commands: [
      { name: "whitelist", desc: "Whitelist a user", usage: "whitelist @user | user id", examples: [",whitelist @user123", ",whitelist 123456789"] },
      { name: "unwhitelist", desc: "Unwhitelist a user", usage: "unwhitelist @user | user id", examples: [",unwhitelist @user123"] },
      { name: "whitelistedusers", desc: "Show whitelisted users", usage: "whitelistedusers / ,wu", examples: [",wu"] }
    ]
  },

  {
    id: "others",
    label: "➕ Others",
    commands: [
      { name: "cmds", desc: "Show the number of commands", usage: "cmds / ,commands", examples: [",cmds", ",commands"] },
      { name: "help", desc: "Shows the help menu", usage: ",help", examples: [",help"] },
      { name: "support", desc: "Provides Discord server and website", usage: ",support", examples: [",support"] },
      { name: "cmdcount", desc: "Show this command list", usage: "cmdcount / ,cc", examples: [",cc", ",cmdcount"] }
    ]
  }
];

// --- RENDERING & INTERACTIVITY (unchanged) ---
const pillsEl = document.getElementById("pills");
const gridEl = document.getElementById("grid");
const searchInput = document.getElementById("search");

// create pills
pillsEl.innerHTML = "";
const allPill = document.createElement("button");
allPill.className = "pill active";
allPill.textContent = "All";
allPill.dataset.id = "all";
pillsEl.appendChild(allPill);

COMMANDS.forEach(cat=>{
  const b = document.createElement("button");
  b.className = "pill";
  b.textContent = cat.label;
  b.dataset.id = cat.id;
  pillsEl.appendChild(b);
});

// handle pill clicks
pillsEl.addEventListener("click", e=>{
  if(!e.target.matches(".pill")) return;
  Array.from(pillsEl.children).forEach(n=>n.classList.remove("active"));
  e.target.classList.add("active");
  render();
});

// create a flat list for searching
function getFilteredCommands(){
  const active = document.querySelector(".pill.active").dataset.id;
  const q = (searchInput.value || "").trim().toLowerCase();

  let list = [];
  COMMANDS.forEach(cat=>{
    if(active!=="all" && active !== cat.id) return;
    cat.commands.forEach(cmd=>{
      list.push({...cmd, category:cat.label, catId:cat.id});
    })
  });

  if(q){
    list = list.filter(c=>{
      return (c.name && c.name.toLowerCase().includes(q))
        || (c.desc && c.desc.toLowerCase().includes(q))
        || (c.usage && c.usage.toLowerCase().includes(q))
        || (c.examples && c.examples.join(" ").toLowerCase().includes(q))
        || (c.category && c.category.toLowerCase().includes(q));
    });
  }

  return list;
}

function createCard(cmd){
  const div = document.createElement("article");
  div.className = "card";

  div.innerHTML = `
    <div class="title-row">
      <div>
        <h3>${escapeHtml(cmd.name)}</h3>
        <div class="badge">${escapeHtml(cmd.category)}</div>
      </div>
      <div style="min-width:72px;text-align:right;color:var(--muted);font-size:13px">${escapeHtml(cmd.catId)}</div>
    </div>

    <p class="desc">${escapeHtml(cmd.desc || "")}</p>

    <div>
      <div style="font-weight:700;margin-bottom:8px;font-size:13px">Usage:</div>
      <div class="usage-box">
        <div class="usage-left">${escapeHtml(cmd.usage || "")}</div>
        <button class="copy-btn" data-copy="${escapeHtml(cmd.usage || "")}" title="Copy">📋</button>
      </div>
    </div>

    <div style="margin-top:6px">
      <div style="font-weight:700;margin-bottom:8px;font-size:13px">Examples:</div>
      <div class="examples">
        ${ (cmd.examples||[]).map(x=>`<div class="example-line">${escapeHtml(x)}</div>`).join("") }
      </div>
    </div>
  `;

  return div;
}

function render(){
  gridEl.innerHTML = "";
  const list = getFilteredCommands();
  if(list.length === 0){
    const empty = document.createElement("div");
    empty.style.color = "var(--muted)";
    empty.style.padding = "40px";
    empty.style.textAlign = "center";
    empty.textContent = "No commands found.";
    gridEl.appendChild(empty);
    return;
  }

  list.forEach(cmd=>{
    const card = createCard(cmd);
    gridEl.appendChild(card);
  });
}

// copy-to-clipboard handler
document.body.addEventListener("click", async (e)=>{
  const btn = e.target.closest(".copy-btn");
  if(!btn) return;
  const text = btn.dataset.copy || "";
  try{
    await navigator.clipboard.writeText(text);
    btn.textContent = "✓";
    setTimeout(()=>btn.textContent = "📋", 900);
  }catch(err){
    alert("Copy failed. Text:\n" + text);
  }
});

// utils
function escapeHtml(s){
  if(!s) return "";
  return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

// search
searchInput.addEventListener("input", ()=>{
  render();
});

// initial render
render();
