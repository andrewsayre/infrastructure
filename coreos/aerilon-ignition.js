{
  "ignition": {
    "config": {},
    "timeouts": {},
    "version": "2.1.0"
  },
  "networkd": {},
  "passwd": {
    "users": [
      {
        "name": "core",
        "sshAuthorizedKeys": [
          "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAhkd3JyxNUQ+wWnwkH/HvfCFAkQLLlR6fMn5rPiKIfRf0ZEpJit01oGrnZXCQJcgLefq/5EU3NMdGV6TW8g7RUlN7jbGQ6hVVfF9XTtAEmz51ERoNE7TtfB090sRqRwJVoN/Ah7HzJkGO3LZarfIPr9WAkqoYF1CuzZ61v68zsgCQEDZCd2Gl5WHPYWtpyG17FNQcXNX8mXBX77LG5K7yyBs9xewBNa2KEIdUB4Nez/ScLbymjPIdHGrpBraPbX+9ofbgIyg/ZOwsG5HSshuzL7s3L487yURCAPqtO+dELZC+K61LeBnPNQB/HEQXI/F0Ab9UPL+WsM+kqil7Egc+Dw== rsa-key-20180325"
        ]
      }
    ]
  },
  "storage": {
    "files": [{
      "filesystem": "root",
      "path": "/etc/hostname",
      "mode": 420,
      "contents": { "source": "data:,aerilon" }
    },
    {
      "filesystem": "root",
      "path": "/etc/coreos/update.conf",
      "mode": 420,
      "contents": { "source": "data:,GROUP%3Dstable%0A%0AREBOOT_STRATEGY%3D%22reboot%22" }
    }]
  },
  "systemd": {}
}
