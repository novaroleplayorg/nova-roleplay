function loadContent(type) {
  const title = document.getElementById("title");
  const content = document.querySelector(".card");

  const data = {
    dm: {
      title: "DeathMatch (DM)",
      text: "Rol temelli ve oyun içi gerekçe olmadan yapılan saldırılar DM kapsamına girer."
    },
    emote: {
      title: "Emotesiz Ateş",
      text: "Herhangi bir rol ifadesi olmadan silah kullanımı yasaktır."
    },
    rdm: {
      title: "Random DM (RDM)",
      text: "Hiçbir rol geçmişi olmadan yapılan saldırılardır."
    },
    vdm: {
      title: "Vehicle DM (VDM)",
      text: "Araç kullanılarak kasıtlı şekilde oyunculara zarar verilmesidir."
    },
    mg: {
      title: "Metagaming (MG)",
      text: "OOC bilgilerin IC şekilde kullanılmasıdır."
    },
    pg: {
      title: "Powergaming (PG)",
      text: "Gerçekçilik dışı, zorlayıcı rol davranışlarıdır."
    },
    fearrp: {
      title: "FearRP / NVL",
      text: "Karakterin hayatını hiçe sayan rol davranışlarıdır."
    },
    ck: {
      title: "Character Kill (CK)",
      text: "Karakterin kalıcı olarak silinmesini kapsayan durumdur."
    },
    nlr: {
      title: "New Life Rule (NLR)",
      text: "Ölüm sonrası önceki olayların hatırlanmaması kuralıdır."
    },
    admin: {
      title: "Yetkili Yetkisi",
      text: "Yetkililerin rol ve kural çerçevesinde sahip olduğu yetkilerdir."
    }
  };

  title.innerText = data[type].title;
  content.innerHTML = `<p>${data[type].text}</p>`;
}
